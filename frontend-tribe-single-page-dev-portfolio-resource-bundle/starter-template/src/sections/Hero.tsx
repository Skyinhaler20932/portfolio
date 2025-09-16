import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import LoadIcon from '@/assets/icons/loadBalance.svg';
import ContIcon from '@/assets/icons/container.svg';
import VolIcon from '@/assets/icons/volume.svg';
import MonIcon from '@/assets/icons/monitor.svg';
import GearIcon from '@/assets/icons/gear.svg';
import BashIcon from '@/assets/icons/bash.svg';
import CloudIcon from '@/assets/icons/cloud.svg';
import CIcon from '@/assets/icons/cli.svg';
import { HeroOrbit } from '@/components/HeroOrbit';


export const HeroSection = () => {
  return <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none" >
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage:`url(${grainImage.src})`
      }}>
      </div>
      {/*Rings*/}
      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>
      <HeroOrbit size={425} rotation={-130} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
            <CIcon className="size-14 text-emerald-300 opacity-50" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6s">
            <MonIcon className="size-8 text-emerald-300 opacity-50" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={80}shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s">
            <GearIcon className="size-7 text-emerald-300 opacity-50" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s">
            <BashIcon className="size-14 text-emerald-300 opacity-50" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
            <ContIcon className="size-12 text-emerald-300 opacity-70" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
            <VolIcon className="size-8 text-emerald-300 opacity-50" />
      </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="6s">
            <CloudIcon className="size-14 text-emerald-300 opacity-50" />
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="54s" shouldSpin spinDuration="6s">
            <LoadIcon className="size-20 text-emerald-300 opacity-70" />
      </HeroOrbit>
    </div>
    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
      <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
        <div className="bg-green-500 size-2.5 rounded-full relative">
          <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
        </div>
        <div className="text-sm font-medium">Available for new projects</div>
      </div>
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">{"I’m Youssef"} <br /> DevOps engineer </h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        I design scalable infrastructures, automate workflows, and ensure reliable deployments 
        that help teams move faster with confidence.
      </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <a href="https://drive.google.com/uc?export=download&id=152MsjKHDUQecPAxqTVVbHD7VjyupZDdn"
           target="_blank" 
           rel="noopener noreferrer" 
           className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold"> Download My CV</span>
          <ArrowDown className="size-4" />
        </a>




<a href="https://www.linkedin.com/in/youssef-moussa-83397a358/"
   target="_blank" 
   rel="noopener noreferrer" 
   className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
  <span>👋🏾</span>
  <span className="font-semibold"> {"Let's Connect"}</span>
</a>





      </div>
    </div>
  </div>;
};
