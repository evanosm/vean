"use client"

import Image from 'next/image';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';

export default function Page() {
  return (
    <div className="w-full h-[calc(150vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row">
      <FirstBloc></FirstBloc>
      <SecondBloc></SecondBloc>
    </div>
  )
}

function FirstBloc(): JSX.Element {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const temp = fetchProjects().then((data) => {
      setCount(data)
    })
  })

  return (
    <div
      className='w-full h-fit md:w-1/2 md:h-full md:px-6 py-6 flex items-center justify-center'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-0'>
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-serif'>Evan <br />OSMONT</h1>
          <p className='italic font-light text-end w-2/3 ml-auto'>Freelance Developpement & Communication</p>
        </div>
        <div className='h-px w-full bg-dark'></div>
        <div className='flex flex-col gap-1'>
          <h2 className='font-bold font-sm'>Biography :</h2>
          <p className='font-light'>- Hey, <br />
            I’m a 20 years old Fullstack Developper currently working at Forinov. I also love to learn new skill on my free time !
          </p>
          <div className='w-full flex flex-row justify-between gap-3 mt-3'>
            <CallToAction
              text="Portfolio"
              link="/portfolio"
              hasIcon
            ></CallToAction>
            <CallToAction
              text="My CV"
              link="https://read.cv/evanosm"
              hasIcon
            ></CallToAction>
            <CallToAction
              text="Contact"
              link="/contact"
              hasIcon
            ></CallToAction>
          </div>
        </div>
        <div className='h-px w-full bg-dark'></div>
        <div className='w-full flex flex-row justify-between relative text-center'>
          <div className='flex flex-col gap-1 relative top-8 md:top-0'>
            <h1 className='text-5xl font-serif'>{count}+</h1>
            <p className='font-light w-full text-center'>Projects</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-5xl font-serif'>10+</h1>
            <p className='font-light w-full text-center'>Tools</p>
          </div>
          <div className='flex flex-col gap-1 relative top-8 md:top-0'>
            <h1 className='text-5xl font-serif'>200+</h1>
            <p className='font-light w-full text-center'>Github views</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SecondBloc() {
  return <div className='w-full h-1/3 md:w-1/2 md:h-full flex items-center justify-center'>
    <div className='absolute blob2 w-96 h-96 opacity-80 bg-black shadow-xl'></div>
    <div className='absolute blob w-[350px] h-[350px] border border-light bg-black'></div>
    <div className='w-72 h-72 rounded-full relative overflow-hidden border border-light'>
      <Image
        src='/evan.jpg'
        alt='Picture of myself'
        fill
        priority
        className='object-cover grayscale '
      ></Image>
    </div>
  </div>
}

  const fetchProjects = () => {
    return fetch("http://api.vean.fr/projects",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
            }
        }
    )
        .then((res) => res.json())
        .then((data) => data.length);
}