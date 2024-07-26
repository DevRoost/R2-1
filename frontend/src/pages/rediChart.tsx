
import Head from 'next/head';
import React from 'react';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import { getPageTitle } from '../config';
import Link from 'next/link';

import CardBox from '../components/CardBox';
const RediChart = () => {


  
  return (
    <>
      <Head>
        <title>{getPageTitle('RediChart')}</title>
      </Head>
      <SectionMain>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-3xl leading-tight  mb-10'>
    RediLearn

              </div>
           
        </div>
     

        <div className='grid grid-cols-3 gap-4'>
      <div className="...">
        <CardBox className='mb-6 height250 text-2xl'  >
       <Link href='/rediChartAI/?name=CourseContentAI'>Course Content AI</Link> 
      
        </CardBox>
        </div>
      <div className="col-span-2 ..."><CardBox className='mb-6 height250 text-2xl' >
      <Link href='/rediChartAI/?name=ByteSizedAI'>Byte Sized Video AI</Link> 

      
        </CardBox></div>
     
      
      
      </div>
      <div className='grid grid-cols-3 gap-4'>
     
      <div className="col-span-2 ..."><CardBox className='mb-6 height250 text-2xl' >
      <Link href='/rediChartAI/?name=MindMapAI'>Mind Map AI</Link> 
     
        </CardBox></div>
     
        <div className="...">
        <CardBox className='mb-6 height250 text-2xl'  >
        <Link href='/rediChartAI/?name=InteractiveDemo'>Intercative Demo</Link> 
       
      
        </CardBox>
        </div>
      
      </div>
     
      </SectionMain>
    </>
  );
};

RediChart.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default RediChart;
