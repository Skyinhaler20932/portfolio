"use client";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/bookcover2.jpg'
import LinuxIcon from '@/assets/icons/linux.svg';
import JenkinsIcon from '@/assets/icons/jenkinssvgrepo.svg';
import AnsibleIcon from '@/assets/icons/ansible.svg';
import DockerIcon from '@/assets/icons/dockersvgrepo.svg';
import GitIcon from '@/assets/icons/git.svg';
import PythonIcon from '@/assets/icons/python.svg';
import NignxIcon from '@/assets/icons/nginxS.svg';
import PrometheusIcon from '@/assets/icons/prometheus.svg';
import SonarIcon from '@/assets/icons/sonarqube.svg';
import VagrantIcon from '@/assets/icons/vagrant.svg';
import { ToolIcon } from "@/components/ToolIcon";
import mapImage from '@/assets/images/EgyptMap.jpg';
import mapMemoji from '@/assets/images/HappyMap.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";





const toolboxItems = [
  {
    title: 'Linux',
    iconType: LinuxIcon,
  },
  {
    title: 'Jenkins',
    iconType: JenkinsIcon,
  },
  {
    title: 'Ansible',
    iconType: AnsibleIcon,
  },
  {
    title: 'Docker',
    iconType: DockerIcon,
  },
  {
    title: 'Git',
    iconType: GitIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'Nginx',
    iconType: NignxIcon,
  },
  {
    title: 'Prometheus',
    iconType: PrometheusIcon,
  },
  {
    title: 'SonarQube',
    iconType: SonarIcon,
  },
  {
    title: 'Vagrant',
    iconType: VagrantIcon,
  }
]


const hobbies = [
  {
    title: 'Football',
    emoji: '🏈',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Chilling',
    emoji: '🌳',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '70%',
    top: '45%',
  },
]




export const AboutSection = () => {
  const contrainstRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my prespectives." />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="How to win friends and influence people by Daniel Carnegie." />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the technologies that will shape your next project"
                className=""
              />

              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:70s]" />
              <ToolboxItems items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:50s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Cloud" description="Explore my interests and hobbies beyond the automation realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={contrainstRef}>
                {hobbies.map(hobby => (
                  <motion.div
                  key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contrainstRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Cairo map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2
            -translate-x-[30%] -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 -z-10"></div>
                <Image src={mapMemoji} alt="Chiling Joe" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};





