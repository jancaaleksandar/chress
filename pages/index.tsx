import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from "next/font/google";
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    const handleMessage = (e : any) => {
      if (e.data && e.data.id === "11221235") {
        const iframe = document.getElementById(e.data.id);
        if (iframe) {
          iframe.style.height = `${e.data.frameHeight + 30}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup listener
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Add any head elements here if needed */}
      </Head>
      {/* Other components or content can be added here */}
      <iframe
        id="11221235"
        allowTransparency = {true}
        frameBorder="0"
        style={{ width: '100%', border: 'none' }}
        src="//www.chess.com/emboard?id=11221235"
      ></iframe>
    </>
  );
}
