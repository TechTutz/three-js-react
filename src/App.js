import { Canvas } from '@react-three/fiber';
import { Box } from './Box';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1>Three.js in React</h1>
      <Canvas
        style={{
          height: '500px',
          width: '700px',
          backgroundColor: '#111'
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box />
      </Canvas>
    </div>
  );
}
