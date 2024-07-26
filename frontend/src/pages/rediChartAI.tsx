"use client"; // this registers <Editor> as a Client Component
import Head from 'next/head';
import React, { useEffect } from 'react';
import type { ReactElement } from 'react';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/SectionMain';
import { getPageTitle } from '../config';
import Link from 'next/link';

import CardBox from '../components/CardBox';
import { useRouter } from 'next/router';
import { Splitter, SplitterPanel } from 'primereact/splitter';



import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";


const RediChartAI = () => {

  const routes = useRouter()
  
  const {name} = routes.query
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
        <title>{getPageTitle('RediChartAI')}</title>
      </Head>
      <SectionMain>
        <div className='grid grid-cols-2 gap-4'>
        <div className='text-3xl leading-tight  mb-10'>
        <Link href='/rediChart/'>RediChartAI</Link>   / {name}

              </div>

             
           
        </div>
        
        <div style={{height:'600px'}}>
     


<Splitter >
    <SplitterPanel  size={25} minSize={10}
    ><div style={{ backgroundColor: 'lightblue',height:'600px' }} ><BlockNoteView editor={editor} style={{height:"100%"}} /></div></SplitterPanel>
    <SplitterPanel className='w-100'> <div>

      {name =="ByteSizedAI" &&  <iframe src="https://my.onetake.ai/4e26f8a0/a6ee6785/"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
         {name =="CourseContentAI" &&  <iframe src="https://bot.usemevo.com/664c918177f6b4fb78096956"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
       {name =="MindMapAI" &&  <iframe src="https://mindmap.enleslabs.com/finn.html?m=7EJlP&app=embed&ro=1"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
        {name =="InteractiveDemo" &&  <iframe src="https://share.layerpath.com/e/clya0ry940012l90chpiq2hll/tour"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
      

      {/* rediLearn */}

{name =="SalesAI" &&  <iframe src="https://answerly.chat/c527df7d-35b5-4569-b17b-8de053eaa1cf"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
         {name =="PriceMasterAI" &&  <iframe src="https://bot.usemevo.com/664c918177f6b4fb78096956"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
       {name =="TechAI" &&  <iframe src="https://chatbot.speakdaddy.com/chatbot-iframe/9ff8796d9d804e9db5e3aea6ce0dcbdf"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
        {name =="PreSalesAI" &&  <iframe src="https://retune.so/share/chat/11eed08b-ce12-9560-9f8a-13daa467f919/widget?thread=11ef3dbe-831a-d8b0-9157-4fae377d708a"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }
       {name =="DesignerAI" &&  <iframe src="https://chatbot.speakdaddy.com/chatbot-iframe/4cdf3becfd6a471b8621c96d8545896d"  style={{height:'600px',width:'-webkit-fill-available'}}></iframe>
      }

   
    </div></SplitterPanel>
</Splitter>


              </div>
     
      </SectionMain>
    </>
  );
};

RediChartAI.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default RediChartAI;
