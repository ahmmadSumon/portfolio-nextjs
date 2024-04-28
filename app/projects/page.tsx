"use client";
import { StaticImageData } from 'next/image';
import { useEffect, useState } from "react";
import React from "react";
import Card from "../component/Card";
import Image from "next/image"; // Import the Next.js Image component
import { InfiniteMovingCards } from "../component/ui/infinite-moving-cards";

interface CardProps {
  title: string;
  paragraph: string;
  imageSrc: StaticImageData;
  projectLink: string;
  githubLink: string;
 
}

// Importing images
import image1 from "../../public/card/2 (1).png";
import image2 from "../../public/card/2 (2).png";
import image3 from "../../public/card/2 (3).png";
import image4 from "../../public/card/2 (4).png";
import image5 from "../../public/card/2 (5).png";

const Project = () => {
  // Define card data
  const cardData: CardProps[] = [
    {
      title: "An e-Commerce website",
      paragraph: "Build with react",
      imageSrc: image1 ,
      projectLink: "https://example.com/project1", // Provide a project link
    githubLink: "https://github.com/user/repo1", // Provide a GitHub link
      
    },
    {
      title: "Luxury Sell website",
      paragraph:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image2,
      projectLink: "https://example.com/project1", // Provide a project link
    githubLink: "https://github.com/user/repo1", // Provide a GitHub link
   
    },
    {
      title: "Travel website",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image3,
      projectLink: "https://example.com/project1", // Provide a project link
    githubLink: "https://github.com/user/repo1", // Provide a GitHub link
      
    },
    {
      title: "Golf Booking website",
      paragraph:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image4,
      projectLink: "https://example.com/project1", // Provide a project link
    githubLink: "https://github.com/user/repo1", // Provide a GitHub link
 
    },
    {
      title: "Coaching website",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image5,
      projectLink: "https://example.com/project1", // Provide a project link
    githubLink: "https://github.com/user/repo1", // Provide a GitHub link
 
    },
    {
      title: "Kid e-commerce website",
      paragraph:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image5,
      projectLink: "https://example.com/project1", // Provide a project link
    githubLink: "https://github.com/user/repo1", // Provide a GitHub link

    },
  ];
  const testimonials = [
    {
      quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    // Additional testimonial data...
  ];
  return (
    <div className="project-container container p-8">
      <h2 className="text-3xl font-semibold text-center mt-20 mb-8">My Recent Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            paragraph={card.paragraph}
            imageSrc={card.imageSrc.src}
            projectLink={card.projectLink} // Make sure projectLink is included
            githubLink={card.githubLink} // Make sure githubLink is included
          />
        ))}
      </div>
<div className="mt-10">
  <h1 className='text-center'>What my clients say</h1>
  <div className="d-flex justify-center items-center mt-5">
  <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
  />
  </div>
</div>
    </div>
  );
};

export default Project;
