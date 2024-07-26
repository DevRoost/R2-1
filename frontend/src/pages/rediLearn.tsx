
import Head from 'next/head';
import React from 'react';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import { getPageTitle } from '../config';
import Link from 'next/link';

import CardBox from '../components/CardBox';
const RediLearn = () => {


  
  return (
    <>
      <Head>
        <title>{getPageTitle('RediLearn')}</title>
      </Head>
      <SectionMain>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-3xl leading-tight  mb-10'>
    RediChart

              </div>
           
        </div>
     

        <div className='grid grid-cols-3 gap-4'>
      <div className="...">
        <CardBox className='mb-6 height250 text-2xl'  >
       <Link href='/rediChartAI/?name=SalesAI'>Sales AI</Link> 
      
        </CardBox>
        </div>
      <div className="col-span-2 ..."><CardBox className='mb-6 height250 text-2xl' >
      <Link href='/rediChartAI/?name=PriceMasterAI'>Price Master AI</Link> 

      
        </CardBox></div>
     
      
      
      </div>
      <div className='grid grid-cols-3 gap-4'>
     
      <div className=""><CardBox className='mb-6 height250 text-2xl' >
      <Link href='/rediChartAI/?name=TechAI'>Tech AI</Link> 
     
        </CardBox></div>
     
        <div className="...">
        <CardBox className='mb-6 height250 text-2xl'  >
        <Link href='/rediChartAI/?name=PreSalesAI'>PreSales AI</Link> 
       
      
        </CardBox>
        </div>
        <div className=""><CardBox className='mb-6 height250 text-2xl' >
      <Link href='/rediChartAI/?name=DesignerAI'>Designer AI</Link> 
     
        </CardBox></div>
      </div>
     
      </SectionMain>
    </>
  );
};

RediLearn.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default RediLearn;
