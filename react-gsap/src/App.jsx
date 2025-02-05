import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:500,
  //     duration:2,
  //     delay:1
  //   })
  // })

  const gsapRef = useRef();
  

  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 500,
  //     duration: 2,
  //     delay: 1,
  //     rotate:720,
  //   });
  // });
  useGSAP(() => {
    gsap.from(".box2", {
      opacity:0,
      scale:1,
      duration: 2,
      delay: 1,
      rotate:720
    });
  },{scope:".container"});

  return (
    <main>
      <div 
      // ref={gsapRef} 
      className="box2"></div>
      <div className="container">
        <div className="box2"></div>
      </div>
    </main>
  );
};

export default App;
