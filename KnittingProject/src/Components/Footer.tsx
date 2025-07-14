import React, { useState, useEffect, useCallback } from 'react';

const AnimatedButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block px-4 py-2 overflow-hidden font-medium transition-all duration-300 ease-in-out
        ${isHovered ? 'text-black' : 'text-gray-600 hover:text-black'}
        group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300 ease-in-out
          ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
      />
    </a>
  );
};

const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentHour, setCurrentHour] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const checkScroll = useCallback(() => {
    // Show footer when user is near the bottom of the page
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.documentElement.offsetHeight - 100; // 100px threshold
    
    if (scrollPosition >= bottomPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    // Initial check
    checkScroll();
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  useEffect(() => {
    // Update time initially and every minute
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentHour(hours);
      setCurrentTime(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Message based on time of day
  const getMessage = () => {
    if (currentHour >= 22 || currentHour < 6) {
      return "I'M PROBABLY SLEEPING\nMESSAGE ME LATER";
    } else if (currentHour < 12) {
      return "GOOD MORNING\nFEEL FREE TO REACH OUT";
    } else if (currentHour < 18) {
      return "I'M PROBABLY KNITTING\nMESSAGE ME";
    } else {
      return "GOOD EVENING\nFEEL FREE TO CONTACT ME";
    }
  };

  return (
    <footer 
      className={`fixed bottom-0 left-0 right-0 bg-white py-8 px-4 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Clock and Time Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="text-5xl font-light mb-6">{currentTime}</div>
          
          <div className="uppercase text-sm tracking-wider text-gray-500 mb-8">
            MY CURRENT LOCAL TIME
          </div>
          
          <div className="text-center text-2xl text-gray-600 whitespace-pre-line">
            {getMessage()}
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} DRAGI KNITS
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <AnimatedButton href="mailto:contact@draginknits.com">
              CONTACT@DRAGINKNITS.COM
            </AnimatedButton>
            <AnimatedButton href="https://github.com">
              GITHUB
            </AnimatedButton>
            <AnimatedButton href="https://instagram.com">
              INSTAGRAM
            </AnimatedButton>
            <AnimatedButton href="https://pinterest.com">
              PINTEREST
            </AnimatedButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;