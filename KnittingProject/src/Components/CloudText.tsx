import React from 'react';
import { useSpring, animated } from '@react-spring/web';


interface CloudLetterProps {
 letter: string;
 initialX: string;
 initialY: string;
 delay: number;
}


const CloudLetter: React.FC<CloudLetterProps> = ({ letter, initialX, initialY, delay }) => {
 const [styles] = useSpring(() => ({    
   from: {
     opacity: 0,
     transform: `translate(${initialX}, ${initialY}) scale(0.8)`
   },
   to: {
     opacity: 1,
     transform: 'translate(0%, 0%) scale(1)'
   },
   delay: delay * 200,
   config: { tension: 120, friction: 14 }
 }));


 // Use the public directory for images - note case sensitivity
 const imageSrc = `/letters/${letter}.png`;


 return (
   <animated.div
     className="inline-block relative"
     style={{
       ...styles,
       willChange: 'transform, opacity',
     }}
   >
     <div className="animate-float" style={{ animationDelay: `${delay * 0.2}s` }}>
       <img
         src={imageSrc}
         alt={letter}
         className="h-24 w-24 object-contain hover:scale-110 transition-transform duration-300"
         draggable="false"
       />
     </div>
   </animated.div>
 );
};


const CloudTitle: React.FC = () => {
 const letters = [
   { letter: 'B', initialX: '-200%', initialY: '-100%', delay: 0 },
   { letter: 'A', initialX: '200%', initialY: '-50%', delay: 0.2 },
   { letter: 'R', initialX: '-200%', initialY: '50%', delay: 0.4 },
   { letter: 'G', initialX: '200%', initialY: '100%', delay: 0.6 },
   { letter: 'I', initialX: '0%', initialY: '-150%', delay: 0.8 },
 ];


 return (
   <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
     <div className="flex items-center justify-center space-x-2 md:space-x-4">
       {letters.map((letter, index) => (
         <CloudLetter
           key={index}
           letter={letter.letter}
           initialX={letter.initialX}
           initialY={letter.initialY}
           delay={letter.delay}
         />
       ))}
     </div>
   </div>
 );
};


export default CloudTitle;



