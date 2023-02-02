import Image from 'next/image';
import CallToAction from '../../components/CallToAction';

export default function Page() {
  return (
    <div className="w-full h-[calc(150vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row">
      <FirstBloc></FirstBloc>
      <SecondBloc></SecondBloc>
    </div>
  )
}

function FirstBloc() {

  const views = fetchViews();

  return (
    <div
      className='w-full h-fit md:w-1/2 md:h-full md:pr-6 py-6 flex items-center justify-center'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-0'>
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-serif'>Evan <br />OSMONT</h1>
          <p className='italic font-light text-end w-2/3 ml-auto'>Freelance Developpement & Communication</p>
        </div>
        <div className='h-px w-full bg-dark'></div>
        <div className='flex flex-col gap-1'>
          <h2 className='font-bold font-sm'>Biography :</h2>
          <p className='font-light'>Hey, <br />
            I’m a 20 years old Fullstack Developper currently working at Forinov. I also love to learn new skill on my free time !
          </p>
          <div className='w-fit ml-auto flex flex-row gap-3 mt-3'>
          <CallToAction
              text="My projects"
              link="/projects"
              hasIcon
            ></CallToAction>
            <CallToAction
              text="Read my CV"
              link="https://read.cv/evanosm"
              hasIcon
            ></CallToAction>
            <CallToAction
              text="Contact me"
              link="/contact"
              hasIcon
            ></CallToAction>
          </div>
        </div>
        <div className='h-px w-full bg-dark'></div>
        <div className='w-full flex flex-row justify-between relative'>
          <div className='flex flex-col gap-1 relative top-8 md:top-0'>
            <h1 className='text-5xl font-serif'>30+</h1>
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
  return <div className='w-full h-1/2 md:w-1/2 md:h-full flex items-center justify-start'>
    <div className='w-full h-full rounded-t-full relative overflow-hidden'>
      <Image
        src='/evan.jpg'
        alt='Picture of myself'
        fill
        priority
        className='object-cover grayscale'
      ></Image>
    </div>
  </div>
}

async function fetchViews() {
  const res = await fetch('https://api.github.com/repos/evanosm/evanosm/traffic/views',
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + process.env.GITHUB_TOKEN
      }
    }
  )
  const data = await res.json();
  console.log(data);

  return data;
}