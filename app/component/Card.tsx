import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface CardProps {
  title: string;
  paragraph: string;
  imageSrc: string;
  projectLink: string;
  githubLink: string;

}

const Card: React.FC<CardProps>= ({ title, paragraph, imageSrc, projectLink, githubLink } : CardProps) => {
  return (
    <div className="max-w-xl rounded-lg overflow-hidden shadow-lg mx-4 my-8 transition transform hover:shadow-xl hover:scale-105">
      <Image src={imageSrc} width={300} height={200} layout="responsive" alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 bg-white">
        <div className="font-semibold text-lg mb-2">{title}</div>
        <p className="text-gray-600 text-base">{paragraph}</p>
        <div className="mt-4 flex space-x-2">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
          >
            View Project
          </a>
          <a
  href={githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer
hover:bg-gray-700 transition"
>
  GitHub Link
</a>

        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired, 
  
};

export default Card;
