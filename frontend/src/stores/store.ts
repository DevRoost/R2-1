import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import categoriesSlice from './categories/categoriesSlice';
import dashboardsSlice from './dashboards/dashboardsSlice';
import persistent_dataSlice from './persistent_data/persistent_dataSlice';
import portalsSlice from './portals/portalsSlice';
import servicesSlice from './services/servicesSlice';
import rolesSlice from './roles/rolesSlice';
import permissionsSlice from './permissions/permissionsSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    categories: categoriesSlice,
    dashboards: dashboardsSlice,
    persistent_data: persistent_dataSlice,
    portals: portalsSlice,
    services: servicesSlice,
    roles: rolesSlice,
    permissions: permissionsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
