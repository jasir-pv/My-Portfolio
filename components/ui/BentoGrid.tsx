'use client'

import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';
import { WorldMapDemo } from './Map';


const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
      return (
        <div
          className={cn(
            // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
            "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-6 mx-auto",
            className
          )}
        >
          {children}
        </div>
      );
    };

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () =>{
    navigator.clipboard.writeText('jasirahsanpv40@gmail.com')

    setCopied(true)
  }

  return (
    <div
      className={cn(
        "row-span-4 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

        <div className={`${id === 6 && 'flex justify-center'} h-full `} >
            <div className="w-full h-full absolute">
                {img && (
                    <img 
                    src={img} 
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')} 
                    />
                )}
            </div>

            <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 flex 
                items-center justify-center text-white 
                font-bold"/>
              </BackgroundGradientAnimation>  
            )}

            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-extralight  z-10
                text-[#c1c2d3] text-sm md:text-xs lg:text-base
                ">
                    {description}
                </div>

           <div className="font-sans font-bold
            text-lg lg:text-3xl max-w-96 z-10">
                 {title}
            </div>

            </div>

            {/* {id === 2 && <GridGlobe />} */}
            {/* {id === 2 && <WorldMapDemo />} */}
            {/* {id === 2 && (
              <div className='overflow-hidden absolute -bottom-1 sm:block   md:none  right-0 flex justify-end' >
                <img src="/black.png" alt="" className='opacity-50' />
              </div>
            )} */}


            {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit top-2  absolute -right-2 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {['React.js', 'Next.js', 'TypeScript','Express' ].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {['MongoDB','NodeJs','JavaScript'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 66666666666 */}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0
                  }`}
              >
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:'xMidYMid slice'
                  }
                }} />
               
              </div>

                <MagicButton
                  title= {copied ? 'Email copied' : 'Copy my email'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31"
                  handleClick={handleCopy}
                />
            
            </div>
          )}

        </div>

    </div>
  );
};
