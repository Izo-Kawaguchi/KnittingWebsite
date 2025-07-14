import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./Parts/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Parallax pages={2}>
      <ParallaxLayer>
          <div
            className="bg-[url('/Images/BG.jpg')] bg-cover h-screen w-full"
          ></div>
        </ParallaxLayer>


        <ParallaxLayer
        offset={2}
        >
          <div
            className="mask-l-from-90% mask-l-to-100% bg-[url('/Images/test.png')] bg-no-repeat h-screen w-full"
            style={{
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              minHeight: '100vh'
            }}
          ></div>
        </ParallaxLayer>
        
        <ParallaxLayer  
          offset={1}
        >
          <div
            className="mask-l-from-90% mask-l-to-100% bg-[url('/Images/hillBottom.png')] bg-no-repeat w-full h-screen"
            style={{
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              minHeight: '100vh'
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          sticky={{ start: 0, end: 1 }}
        >
          <div className="flex justify-center items-center h-full font-kepler">
            <h1 className='text-[300px] font-medium text-[#374a70]'>Dragi Knits</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.4}
          speed={0.3}
        >
          <div className="flex justify-center items-center h-full font-kepler">
            <h2 className='text-6xl font-bold text-[#2a3d5c] opacity-80'>
              Handcrafted with Love
            </h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
        >
          <div className="flex justify-center items-center h-full font-kepler">
            <h2 className='text-5xl font-extrabold text-blue-600 dark:text-sky-400'> This is a test hopefully it works.</h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;