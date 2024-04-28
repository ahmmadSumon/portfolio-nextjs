import React from 'react';
interface TechBoxProps {
  tech: string;
}
const technologies = [
  'HTML',
  'CSS',
  'Tailwind',
  'JavaScript',
  'React',
  'NextJs',
  'BootStrap',
  'Figma',
];

const TechBox: React.FC<TechBoxProps> = ({ tech }) => {
  const colorMap: Record<string, string> = {
    HTML: 'bg-gradient-to-r from-red-500 to-pink-500', // Gradient for HTML
    CSS: 'bg-gradient-to-r from-blue-500 to-teal-400', // Gradient for CSS
    Tailwind: 'bg-gradient-to-r from-green-500 to-lime-500', // Gradient for Tailwind
    JavaScript: 'bg-gradient-to-r from-yellow-500 to-orange-500', // Gradient for JavaScript
    React: 'bg-gradient-to-r from-cyan-500 to-sky-500', // Gradient for React
    NextJs: 'bg-gradient-to-r from-purple-700 to-purple-300',
    BootStrap: 'bg-gradient-to-r from-pink-500 to-fuchsia-500', // Gradient for SCSS
    Figma: 'bg-gradient-to-r from-orange-500 to-amber-500', // Gradient for Figma
  };

  const colorClass = colorMap[tech] || '';

  return (
    <div
      className={`flex items-center justify-center w-full sm:w-auto h-full p-6 rounded-lg shadow-md text-white font-bold ${colorClass}`}
    >
      {tech}
    </div>
  );
};

const MainBox = () => {
  return (
    <div className="w-[60vw] h-[auto] flex flex-wrap sm:grid sm:grid-cols-2 gap-4 justify-center items-center">
      {technologies.map((tech, index) => (
        <TechBox key={index} tech={tech} />
      ))}
    </div>
  );
};

export default MainBox;
