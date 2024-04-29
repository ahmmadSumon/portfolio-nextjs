import React from 'react';
import Image from 'next/image';
import Img from "../../public/images/ss-removebg.png";

import { motion } from "framer-motion";
import { LampContainer } from "../component/ui/lamp";
import CircularTextWithButton from '../component/CircularText';
import Link from 'next/link'; // Import Next.js Link
import ContactForm from '../component/ContactForm';
import { Button } from "../component/ui/moving-border";
const HeroSection = () => {
  return (
    <section className='hero relative overflow-hidden'>
      

        
        <div
          className="hero-content flex flex-col gap-8 items-center justify-center px-4 md:px-20 lg:px-40"
        >
          <div className="container flex justify-center items-center mt-20 py-40">
            
            {/* Left column (text content) */}
            <div className="col-md-6">
              <h1 className='text-5xl font-extrabold text-black'>
                Turning Vision Into Reality With Code And Design.
              </h1>
              <p className='text-lg pt-3 text-black'>
                As a passionate frontend developer, I bring designs to life with clean, efficient code. I specialize in  creating visually stunning and highly <br /> functional  web applications that deliver exceptional user experiences.
              </p>
              <div className='flex gap-4 mt-8'>
              <Button  className=" bg--500 text-white px-4 py-2 cursor-pointer  rounded-full focus:outline-none">
                    <Link className='text-decoration-none text-black text-xl ' href="">
                            Resume
                    </Link>
              </Button>
              <Button  className=" bg--500 text-white px-4 py-2  rounded-full focus:outline-none cursor-pointer">
      <Link className='text-decoration-none text-black text-xl ' href="mailto:arifahmmadsumon@gmail.com?subject=Regarding Your Website">
             Contact
      </Link>
          </Button>
              </div>
            </div>

            {/* Right column (image) */}
            <div className="col-md-6 d-flex align-items-center justify-content-center hidden md:block">
            <Image
  src={Img}
  alt="Frontend Developer"
  layout="responsive" // Adjusts the image size based on its container
  quality={80} // Adjusts the image quality (range 1-100)
  className="w-full h-auto rounded-lg shadow-lg object-cover"
/>
            </div>
          </div>
        </div>
     
      <div className='absolute bottom-50 left-0 mb-16 mr-16 mt-10 hidden md:block '>
        <CircularTextWithButton/> {/* Positioned strategically */}
      </div>
      <LampContainer className=' md:pt-[5vh]'>
      <motion.div
        initial={{ opacity: 0.5, y: 0 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-20 "
      >
        <ContactForm/>
      </motion.div>
    </LampContainer>
    </section>
  );
};

export default HeroSection;
