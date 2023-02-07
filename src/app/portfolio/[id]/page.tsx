"use client"

import useSWR from 'swr'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import CallToAction from '../../../components/CallToAction';

export default function Page({ params }: { params: any }) {

  const [currentImage, setCurrentImage] = useState(0)

  const fetcher = (url: string) => fetch(url, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
    },
  }).then((res) => res.json())
  const { data, error } = useSWR(`https://api.vean.fr/projects/${params.id}`, fetcher)

  if (error) return <div>failed to load : {error.message}</div>
  if (!data) return <motion.div
    key='page-wrapper'
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className='transition pointer-events-none fixed flex flex-col top-0 left-0 w-screen h-screen bg-dark z-50'
  >
    <h1 className='font-sans text-xl'>Loading...</h1>
    <p>wait till data comes !</p>
  </motion.div>

  const imgNumber: number = data[0].image.length

  const currentImagePercentage: number = (currentImage + 1) * (100 / imgNumber)

  return (
    <div className="w-full min-h-[calc(100vh-6rem)] flex md:justify-center items-start md:items-center gap-y-4 pb-6 pt-6 flex-wrap">
      <div className='w-full lg:w-2/3 h-96 bg-dark relative overflow-hidden'>

        {imgNumber > 0 && <>
          <button className='absolute z-40 h-full w-8 bg-dark backdrop-blur bg-opacity-50 flex items-center justify-center'
            onClick={() => {
              if (currentImage > 0) {
                setCurrentImage(currentImage - 1)
              } else {
                setCurrentImage(imgNumber - 1)
              }
            }}
          >
            <AiFillCaretLeft className='text-light text-3xl md:text-5xl' />
          </button>

          <button className='absolute z-40 right-0 h-full w-8 bg-dark backdrop-blur bg-opacity-50  to-transparent flex items-center justify-center'
            onClick={() => {
              if (currentImage < imgNumber - 1) {
                setCurrentImage(currentImage + 1)
              } else {
                setCurrentImage(0)
              }
            }}
          >
            <AiFillCaretRight className='text-light text-3xl md:text-5xl' />
          </button></>}

        <div className='h-full flex flex-row transition-all duration-500 ease-in-out' style={{
          width: imgNumber * 100 + "%",
          transform: `translateX(-${currentImage * (100 / imgNumber)}%)`,
        }}>
          {data[0].image.map((image: string) => (
            <img
              key={image}
              src={image}
              alt='project image'
              className='object-cover h-full w-full'
              style={{ position: "relative", width: 100 / imgNumber + "%", height: "100%" }}
            ></img>
          ))}
        </div>
      </div>
      <div className='w-full lg:w-1/3 h-96 px-3 flex flex-col relative'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-bold text-dark'>{data[0].name}</h1>
          <p className='font-light capitalize'>{data[0].type}</p>
        </div>
        <h3 className=''><span className='italic mr-2'>{data[0].role}</span>{"- " + data[0].year}</h3>
        <p className='w-full h-fit mt-3 mb-12'>{data[0].desc}</p>
        <div className='flex flex-col gap-3 lg:absolute lg:bottom-0 lg:right-0'>
          <CallToAction
            text='Visit link'
            link={data[0].url}
          ></CallToAction>
          <CallToAction
            text='Back to portfolio'
            link='/portfolio'
          ></CallToAction>
        </div>
      </div>
    </div>
  )
}