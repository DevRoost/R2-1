import * as icon from '@mdi/js';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import SectionTitle from '../components/SectionTitle';
import BaseIcon from '../components/BaseIcon';
import { getPageTitle } from '../config';
import Link from 'next/link';

import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


import { hasPermission } from '../helpers/userPermissions';
import { fetchWidgets } from '../stores/roles/rolesSlice';
import { WidgetCreator } from '../components/WidgetCreator/WidgetCreator';
import { SmartWidget } from '../components/SmartWidget/SmartWidget';

import { useAppDispatch, useAppSelector } from '../stores/hooks';
const Dashboard = () => {

  
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.4
      },
     
    ]
  };
  const data1 = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: [
         
         "#6bc1769b",
           "#768b799b"
        ],

      },
    ],

    plugins: {
      labels: {
        render: "percentage",
       
       
      },
    },
     text: "23%",
  };
  const options1 = {
    maintainAspectRatio: false,
    responsive: false,
    cutout: '70%', // Adjust this value to change the thickness of the doughnut
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      labels: {
        display: false,
        render: "percentage",
        fontColor: ["green", "white", "red"],
        precision: 1
      },
    },
  };
  const options = {
    plugins: {
      legend: {
          display: false // This hides all text in the legend and also the labels.
      }
  },
    scales: {
      x: {
        type: 'category'
      },
      y: {
        beginAtZero: true
      }
    }
  };
  const iconsColor = useAppSelector((state) => state.style.iconsColor);
  const corners = useAppSelector((state) => state.style.corners);
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);


  
  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-3xl leading-tight  mb-10'>
      User Statistics

              </div>
              <div className='text-3xl leading-tight  mb-10'>
     Tools

              </div>
        </div>
     

      <div className='grid grid-cols-2 gap-4'>

      <div 
       className={`${
        corners !== 'rounded-full' ? corners : 'rounded-3xl'
      } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 customBgColor boxShadow`}
     
     >
      <div className='flex flex-row justify-between mb-8'>
      <div className='text-3xl leading-tight  '>
      Total Visits
              </div>
              <div className='text-3xl leading-tight  '>
      123
              </div>
      </div>
    
      <Line data={data}  />
</div>
  <div >
 
              <div className='grid  gap-6 lg:grid-cols-2 '>

             
  <div
          className={`${
            corners !== 'rounded-full' ? corners : 'rounded-3xl'
          } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 boxShadow`}
          style={{height:'200px'}}
        >
          <div className='flex flex-col align-center m-8'>
          <div>
              <BaseIcon
                className={`${iconsColor}`}
                w='w-16'
                h='h-16'
                size={48}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                path={icon.mdiAccountGroup || icon.mdiTable}
              />
            </div>
            <div>
              <div className='text-3xl leading-tight  '>
                Canvas
              </div>
             
            </div>
          
          </div>
        </div>
        <div
          className={`${
            corners !== 'rounded-full' ? corners : 'rounded-3xl'
          } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 boxShadow`}
          style={{height:'200px'}}
        >
          <div className='flex flex-col align-center m-8'>
          <div>
              <BaseIcon
                className={`${iconsColor}`}
                w='w-16'
                h='h-16'
                size={48}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                path={icon.mdiTag || icon.mdiTable}
              />
            </div>
            <div>
              <div className='text-3xl leading-tight  '>
                RediLearn
              </div>
             
            </div>
          
          </div>
        </div>

        <div
          className={`${
            corners !== 'rounded-full' ? corners : 'rounded-3xl'
          } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 boxShadow`}
          style={{height:'200px'}}
        >
          <div className='flex flex-col align-center m-8'>
          <div>
              <BaseIcon
                className={`${iconsColor}`}
                w='w-16'
                h='h-16'
                size={48}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                path={icon.mdiViewDashboard || icon.mdiTable}
              />
            </div>
            <div>
              <div className='text-3xl leading-tight  '>
                RediLearn
              </div>
             
            </div>
        
          </div>
        </div>

  

        <div
          className={`${
            corners !== 'rounded-full' ? corners : 'rounded-3xl'
          } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 boxShadow`}
        >
          <div className='flex flex-col align-center m-7'>
          <div>
              <BaseIcon
                className={`${iconsColor}`}
                w='w-16'
                h='h-16'
                size={48}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                path={icon.mdiShieldAccountOutline || icon.mdiTable}
              />
            </div>
            <div>
              <div className='text-3xl leading-tight   '>
               RediChat
              </div>
             
            </div>
        
          </div>
        </div>
  </div>
      </div>

      </div>
     
     <div className='grid grid-cols-2 gap-4 mt-10'>
     <div 
       className={`${
        corners !== 'rounded-full' ? corners : 'rounded-3xl'
      } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 customBgColor boxShadow`}
     
     >
  <div className='text-2xl leading-tight  '>
  Top Favorite Services

              </div>
              <hr className='mt-2 border-neonGreenTheme-buttonColor  border-blue-600 dark:border-pavitra-blue' />
              <div className='grid grid-cols-2  mt-2'>
              <table className="table-fixed">
  <thead>
    <tr>
      <th>Service </th>
      <th>Service Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td ><div className='box mr-2 bg-blue-600'></div>Aruba  AI</td>
      <td>50</td>
    </tr>
    <tr>
      <td><div className='box mr-2 bg-blue-600'></div>Aruba  AI</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
<Doughnut data={data1}  options={options1}
/>
              </div>
     </div>
      <div 
       className={`${
        corners !== 'rounded-full' ? corners : 'rounded-3xl'
      } dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6 customBgColor boxShadow`}
     
     >
  <div className='text-2xl leading-tight  '>
  Top Brands

              </div>
              <hr className='mt-2 border-neonGreenTheme-buttonColor  border-blue-600 dark:border-pavitra-blue' />
              <div className='grid grid-cols-2 mt-2'>
              <table className="table-fixed">
  <thead>
    <tr>
      <th>Service </th>
      <th>Service Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td ><div className='box mr-2 bg-blue-600'></div>Aruba  AI</td>
      <td>50</td>
    </tr>
    <tr>
      <td><div className='box mr-2 bg-blue-600'></div>Aruba  AI</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
<Doughnut data={data1}  options={options1}
/>
              </div>
            

     </div>
     </div>
      </SectionMain>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Dashboard;
