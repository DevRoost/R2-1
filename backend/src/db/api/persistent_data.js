const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class Persistent_dataDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const persistent_data = await db.persistent_data.create(
      {
        id: data.id || undefined,

        data: data.data || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await persistent_data.setUser(data.user || null, {
      transaction,
    });

    return persistent_data;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const persistent_dataData = data.map((item, index) => ({
      id: item.id || undefined,

      data: item.data || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const persistent_data = await db.persistent_data.bulkCreate(
      persistent_dataData,
      { transaction },
    );

    // For each item created, replace relation files

    return persistent_data;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const persistent_data = await db.persistent_data.findByPk(
      id,
      {},
      { transaction },
    );

    await persistent_data.update(
      {
        data: data.data || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await persistent_data.setUser(data.user || null, {
      transaction,
    });

    return persistent_data;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const persistent_data = await db.persistent_data.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of persistent_data) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of persistent_data) {
        await record.destroy({ transaction });
      }
    });

    return persistent_data;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const persistent_data = await db.persistent_data.findByPk(id, options);

    await persistent_data.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await persistent_data.destroy({
      transaction,
    });

    return persistent_data;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const persistent_data = await db.persistent_data.findOne(
      { where },
      { transaction },
    );

    if (!persistent_data) {
      return persistent_data;
    }

    const output = persistent_data.get({ plain: true });

    output.user = await persistent_data.getUser({
      transaction,
    });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.users,
        as: 'user',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.data) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('persistent_data', 'data', filter.data),
        };
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.user) {
        var listItems = filter.user.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          userId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.persistent_data.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.persistent_data.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('persistent_data', 'data', query),
        ],
      };
    }

    const records = await db.persistent_data.findAll({
      attributes: ['id', 'data'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['data', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.data,
    }));
  }
};
