import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const Box = () => {
  // This reference will give us direct access to the mesh
  const ref = useRef();

  // Rotate mesh every frame
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};
