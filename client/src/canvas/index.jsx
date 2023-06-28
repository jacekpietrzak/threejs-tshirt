import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Shirt from './Shirt';
import { AmbientLight } from 'three';

const CanvasModel = () => {
  return (
    <Canvas
      // we will turn on shadows
      shadows
      // we can play here with a camera position
      camera={{ position: [0, 0, 0], fov: 35 }}
      // gl is to preserve buffers
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'>
      {/* we will use some ambient lighting */}
      <ambientLight intensity={0.5} />
      {/* we also need to add something called Environment that accept different presets */}
      <Environment preset='city' />

      {/* now we need cameraRig object where we will have all components */}
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
