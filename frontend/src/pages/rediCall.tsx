
import Head from 'next/head';
import React from 'react';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import { getPageTitle } from '../config';
import Link from 'next/link';

import CardBox from '../components/CardBox';


const RediCall = () => {



  
  return (
    <>
      <Head>
        <title>{getPageTitle('RediCall')}</title>
      </Head>
      <SectionMain>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-3xl leading-tight  mb-10'>
    RediCall

              </div>
           
        </div>
     

      <div className='grid grid-cols-1 gap-4' style={{height:'600px'}}>
      <iframe src="https://voice.superdashhq.com/"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
   
      
      </div>
     
      </SectionMain>
    </>
  );
};

RediCall.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default RediCall;
