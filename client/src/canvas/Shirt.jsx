import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei'; // Decal - some mesh or texture, useGLTF - we need it to use 3d model, useTexture to be able to apply texture
import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);

  // we will import 3d model
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  // now we will create 2 textures that we will apply to this shirt
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // we will play with easing to apply color smoothly not dramaticaly
  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  // string of current state for key of a shirt group
  const stateString = JSON.stringify(snap);

  return (
    // lets display tshirt
    <group
      // to be sure that the shirt will update we need to provide a key with a string of a current state. This way React will render the model whenever the state changes.
      key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}>
        {/* if isFullTexture than rendering full texture */}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {/* if isLogoTexture than rendering full texture */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.25}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
