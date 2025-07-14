import { useState } from 'react';
// Navbar component

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState(false);

  const navItems = [
    { title: 'Home', subtitle: 'Welcome!' },
    { title: 'About', subtitle: 'Meet Us!' },
    { title: 'Store', subtitle: 'Bags!' },
    { title: 'Contact', subtitle: 'Puppies!' }
  ];

  return (
    <div
      className = "fixed top-0 left-0 z-50 w-full"
      onMouseEnter={() => setActiveButton(true)}
      onMouseLeave={() => setActiveButton(false)}   
    >

    {/*This basically just makes it so that the button and the nav are stacked and centered*/}
    <div className="flex flex-col items-center">
      {/*this creates the horizontal drop down menu*/}
      <div 
        /*you might have to change the overflow to make it show idk also maybe the percentage*/
        className={`w-full transition-all duration-300 ease-in overflow-hidden ${
          activeButton ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >

      <nav className="w-full bg-white border border-gray-200 border-b-0 shadow-lg transition-all duration-200 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                /*this one was harder to understand relative allows it to move as it drops down, group makes it 
                group together fro the hover effect flex-1 tells it to share space evenely.*/
                className="relative group cursor-pointer flex-1 text-center"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setActiveItem(index)}
              >
                {/* Animated top line */}
                <div 
                /*Remeber that left-1/2 -translate-x-1/2 gives perfect horizontal centering*/
                  className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 transition-all duration-400 ease-out ${
                    activeItem === index ? 'bg-orange-500 w-full' : 
                    hoveredItem === index ? 'bg-orange-300 w-3/4' : 
                    'w-1/2 bg-gray-100'
                  }`}
                />

              {/* Main content */}
              <div className="flex flex-col transition-all duration-300 group-hover:translate-y-[-2px] pt-2">
                <span 
                  className={`font-medium text-xl transition-colors duration-200 ${
                    activeItem === index ? 'text-orange-600' : 
                    hoveredItem === index ? 'text-orange-500' : 
                    'text-gray-900'
                  }`}
                >
                  {item.title}
                </span>
                
                <span 
                  className={`text-sm mt-1 transition-colors duration-200 ${
                    activeItem === index ? 'text-orange-500' : 'text-gray-900'
                  }`}
                >
                  {item.subtitle}
                </span>
              </div>
            </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
    
    {/* sick button incoming*/}
    <div className="flex justify-center">
        <button
         className="px-6 py-3 bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300 relative z-10 hover:shadow-lg [clip-path:polygon(0%_0%,100%_0%,90%_100%,10%_100%)]"
        >
        
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <div className="w-5 h-0.5 bg-gray-700 transition-all duration-300"></div>
          <div className="w-5 h-0.5 bg-gray-700 transition-all duration-300"></div>
          <div className="w-5 h-0.5 bg-gray-700 transition-all duration-300"></div>
        </div>
        </button>
      </div>
    </div>
    </div>
  );
};
export default Navbar;




