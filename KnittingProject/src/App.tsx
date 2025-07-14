import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Components/Navbar";
import CloudText from "./Components/CloudText";


function App() {
  return (
    <div>
      <Navbar />
      
      <Parallax pages={2}>

      <ParallaxLayer
      speed={0.2}>
        <div
          className="bg-[url('/BG.png')] bg-[length:100%_100%] bg-no-repeat h-full w-full"
        ></div>
      </ParallaxLayer>
        
      <ParallaxLayer
        offset={.55}
        speed={0.5}
        >
          <div
            className="bg-[url('/Mountain.png')] bg-no-repeat bg-contain bg-center bg-fixed h-[100vh] w-full"
          ></div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.9}
        >
          <CloudText />
        </ParallaxLayer>
        
        <ParallaxLayer  
          offset={0.81}
          speed={0.6}
        >
          <div
            className="bg-[url('/hillBottom.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[100vh] w-full"
          ></div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.3}>
          <div className="relative w-full h-full">
            {/* Cloud 1 cowabunga! */}
            <img
              src="/Clouds/Cloud1.png" alt="Cloud"
              className="absolute top-20 left-[350px] w-100 opacity-80 animate-cloudSlow"
            />
            {/* Cloud 1 cool cloud*/}
            <img
              src="/Clouds/Cloud1.png" alt="Cloud"
              className="absolute top-60 left-[80px] w-48 opacity-30 animate-cloudFast"
            />
            {/* Cloud 3 */}
            <img
              src="/Clouds/Cloud2.png" alt="Cloud"
              className="absolute top-120 left-[800px] w-60 opacity-30 animate-cloudMedium"
            />
            {/* Cloud 4 */}
            <img
              src="/Clouds/Cloud3.png" alt="Cloud"
              className="absolute top-20 left-[1000px] w-60 opacity-40 animate-cloudMedium"
            />
            {/* Cloud 5 */}
            <img
              src="/Clouds/Cloud3.png" alt="Cloud"
              className="absolute top-5 left-[-100px] w-60 opacity-40 animate-cloudMedium"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
} 

export default App;