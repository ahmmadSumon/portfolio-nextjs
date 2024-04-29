"use client"
import React from 'react';
import designSvg from '../../public/svgs/design.svg';
import fastSvg from '../../public/svgs/fast.svg';
import responsiveSvg from '../../public/svgs/responsive.svg';
import rocketSvg from '../../public/svgs/rocket.svg';
import Image from 'next/image';
import Img from '../../public/images/ss-removebg.png';
import Tools from '../component/Tools';
import { AuroraBackground } from '../component/ui/aurora-background';
import { motion } from "framer-motion";
const Page = () => {
  return (
    <div className='py-36 '>
        
      <motion.div
      initial={{ opacity: 0.0, y: 40 }}
whileInView={{ opacity: 1.2, y: 0 }}
transition={{
  delay: 0.3,
  duration: 0.8,
  ease: "easeInOut",
}}
    
>
    

    <div className=' py-20'>
   
      <div className="container ">
   
        <div className="row">
          <div className="col-md-6">
            <h5>BIOGRAPHY</h5>
            <p>
              As a front-end developer with one year of experience, I have honed my skills in creating dynamic, user-friendly web interfaces. My journey into web development began with a passion for crafting intuitive and engaging user experiences. Over the past year, I have developed proficiency in core web technologies such as HTML, CSS, and JavaScript, and I am familiar with modern front-end frameworks such as React, Angular, and Vue.js.
              <br />
              <br />
              I excel at translating design concepts into responsive and visually appealing web pages, ensuring consistent performance across different devices and browsers. My attention to detail and commitment to writing clean, maintainable code have enabled me to contribute effectively to a variety of projects.
              <br />
              <br />
              In addition to my technical expertise, I value collaboration and effective communication, working closely with designers, back-end developers, and other team members to deliver cohesive and high-quality products. My eagerness to continuously learn and stay updated with industry trends drives my growth as a developer, making me a valuable asset to any team.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
    <Image
      src={Img}
      alt="Frontend Developer"
      className="w-full h-auto rounded-square shadow-lg object-cover"
    />
  </div>
         
         
        </div>
  
      </div>
      
      <div className="text-center pt-10">
   
      </div>
      <div className="container py-16">
      <h3 className='text-center'> Skills & Tooling</h3>
        <div className="row ">
          {/* Fast */}
          <div className="col-md-3 flex justify-center flex-column items-center gap-2 text-center mt-[50vh] sm:mt-0">
            <Image className="h-25" src={fastSvg} alt="" />
            <h2 className="text-opacity-75">Fast</h2>
            <p className="text-s">Fast load times and lag-free interaction, my highest priority.</p>
          </div>
          {/* Responsive */}
          <div className="col-md-3 flex justify-center flex-column items-center gap-2 text-center">
            <Image className="h-25" src={responsiveSvg} alt="" />
            <h2>Responsive</h2>
            <p className="text-s">My layouts will work on any device, big or small.</p>
          </div>
          {/* Design */}
          <div className="col-md-3 flex justify-center flex-column items-center gap-2 text-center">
            <Image className="h-25" src={designSvg} alt="" />
            <h2>Design</h2>
            <p className="text-s">Strong preference for easy-to-use, intuitive design.</p>
          </div>
          {/* Dynamic */}
          <div className="col-md-3 flex justify-center flex-column items-center gap-2 text-center">
            <Image className="h-25" src={rocketSvg} alt="" />
            <h2>Dynamic</h2>
            <p className="text-s">Websites don't have to be static; I love making pages come to life.</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-center items-center pb-28">
    <Tools />
  </div>
    </div>
  
     </motion.div>
      
    </div>
  );
};

export default Page;
