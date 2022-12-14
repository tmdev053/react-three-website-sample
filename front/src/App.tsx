import React, { useRef } from 'react';
import './App.css';
import { Image, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const Images= ()=>{
  const {width, height} = useThree((state)=> state.viewport)
  const group: any = useRef();
  const data = useScroll();

  useFrame(()=>{
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(0, 1 / 3) / 3;
  })

  return (
    <group ref={group}>
      <Image url="./img1.jpg" scale={[4, height]} position={[-1, 0, 1]}></Image>
      <Image url="./img2.jpg" scale={[3, 1]} position={[2, 0, 1]}></Image>
      <Image url="./img3.jpg" scale={[3, 1]} position={[-2.3, -height, 2]}></Image>
      <Image url="./img4.jpg" scale={[1.4, 2]} position={[1.3, -height - 0.3, 3.2]}></Image>
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={3} damping={3}>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>Be</h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>Creative</h1>
          <Images></Images>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
