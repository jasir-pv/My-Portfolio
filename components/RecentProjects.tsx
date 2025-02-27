import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='py-20 ' id='projects'>
      <hr  className=' mb-24'/>
      <h1 className='heading'>
        A Small selection of {''}
        <span className='text-purple'>recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center 
      p-6 gap-x-24 gap-y-8 mt-2"> 
          {projects.map(( {id, title, des, img, iconLists, link})=>(
            <div key={id} 
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
              <PinContainer title='Visit here' href={link}>
                <div className=' relative flex items-center justify-center 
                sm:w-96 w-[80vw] overflow-hidden h-[18vh] lg:h-[28vh] md:h-[28vh] mb-10'>

                  <div className='relative w-full h-full overflow-hidden
                  lg:rounded-3xl bg-[#13162d]'>
                    <Image src="/bg.png"
                     alt="bg-png"
                     width={1920} 
                     height={1080} 
                     className='sm:w-full sm:h-fit ' />
                  </div>
                  <Image 
                   src={img}
                   alt={title} 
                   className='z-10 absolute bottom-0 h-auto'
                   fill />

                </div>

                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {title}
                </h1>

                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-purple-500'>
                  {des}
                </p>

              {/* bottom icons  */}
                <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image 
                      src={icon} 
                      alt="icon5" 
                      className="p-2"
                      width={40} 
                      height={40}
                       />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
              </PinContainer>
            </div>
          ))}
      </div>
    </div>
  )
}

export default RecentProjects
