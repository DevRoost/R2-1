
import Head from 'next/head';
import React from 'react';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import { getPageTitle } from '../config';
import Link from 'next/link';

import CardBox from '../components/CardBox';


import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

const Canvas = () => {

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "heading",
        content: "This is a heading block",
      },
      {
        type: "paragraph",
        content: "This is a paragraph block",
      },
      {
        type: "paragraph",
      },
    ],
  });

  
  return (
    <>
      <Head>
        <title>{getPageTitle('Canvas')}</title>
      </Head>
      <SectionMain>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-3xl leading-tight  mb-10'>
    Canvas

              </div>
           
        </div>
     

      <div className='grid grid-cols-1 gap-4' style={{height:'600px'}}>
      <BlockNoteView editor={editor} style={{height:"100%"}} />
   
      
      </div>
     
      </SectionMain>
    </>
  );
};

Canvas.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default Canvas;
