import { animated, useSpring } from "@react-spring/web";
import { useRef, useState, useEffect } from "react";

interface CollidingImagesProps {
  leftImage: string;
  rightImage: string;
  triggerOffset?: number; // 0 to 1, where 0.75 means trigger at 75% of viewport
  animationDistance?: number; // How far the images move from the sides
}

const CollidingImages: React.FC<CollidingImagesProps> = ({
  leftImage,
  rightImage,
  triggerOffset = 0.75,
  animationDistance = 200,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation for the left image
  const leftProps = useSpring({
    x: isVisible ? 0 : -animationDistance,
    opacity: isVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  // Animation for the right image
  const rightProps = useSpring({
    x: isVisible ? 0 : animationDistance,
    opacity: isVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Trigger animation when element is in viewport
        if (rect.top < window.innerHeight * triggerOffset) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOffset]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <animated.div
        style={leftProps}
        className="absolute left-0 w-1/2 h-full flex items-center justify-end pr-8"
      >
        <img
          src={leftImage}
          alt="Left image"
          className="max-h-[80vh] max-w-full object-contain"
        />
      </animated.div>
      
      <animated.div
        style={rightProps}
        className="absolute right-0 w-1/2 h-full flex items-center justify-start pl-8"
      >
        <img
          src={rightImage}
          alt="Right image"
          className="max-h-[80vh] max-w-full object-contain"
        />
      </animated.div>
    </div>
  );
};

export default CollidingImages;
