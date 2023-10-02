import React, { useRef, useEffect, useState,Suspense  } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls correctly
// import glbModel from 'programmer.glb';
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import GLBModel from  './components/Output.jsx'

// const glbModel = useGLTF.preload("./programmer.glb");


// Define a component for your GLB model
// const GLBModel = () => {
//   const modelRef = useRef();

//   const [modelLoaded, setModelLoaded] = useState(false);

//   useEffect(() => {
//     // Load the GLB model using GLTFLoader
//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load("./programmer.glb", (gltf) => {
//       const model = gltf.scene;
//       modelRef.current = model;
//       setModelLoaded(true); // Set the modelLoaded state to true when loading is complete
//     });
//   }, []);

//   return (
//     <group>
//       {modelLoaded && <primitive object={modelRef.current} />}
//     </group>
//   );
// };


// const GLBModelMusic = () => {
//   const modelRef = useRef();

//   const [modelLoaded, setModelLoaded] = useState(false);

//   useEffect(() => {
//     // Load the GLB model using GLTFLoader
//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load(musicModel, (gltf) => {
//       const model = gltf.scene;
//       modelRef.current = model;
//       setModelLoaded(true); // Set the modelLoaded state to true when loading is complete
//     });
//   }, []);

//   return (
//     <group>
//       {modelLoaded && <primitive object={modelRef.current} />}
//     </group>
//   );
// };

// const GLBModelMusic = () => {
//   const modelRef1 = useRef();
//   const [modelLoaded, setModelLoaded] = useState(false);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load(musicModel, (gltf) => {
//       // Set the loaded model to the ref
//       modelRef1.current = gltf.scene;
//       setModelLoaded(true); // Set the modelLoaded state to true when loading is complete
//     });
//   }, []);

//   return (
//     <group>
//       {modelRef1.current && (
//         <primitive object={modelRef1.current} />
//       )}
//     </group>
//   );
   
// };

// Define the main React component
const ProgrammerModel = () => {
  const controls = useRef();
  const controlsMusic = useRef();
  return (
    <React.Fragment>

      <div className="sceneComponent" style={{width: '100%', height:"100%", display: 'flex !important',position:"absolute"}}>
      <Canvas camera={{ position: [8, 0, 0], rotation: [0, 0, 0], fov: 20 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[10, 15, 10]} angle={0.2} />
        <GLBModel />
        <OrbitControls
          ref={controls}
          autoRotate
          autoRotateSpeed={0.3}
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
        />
        {/* <Html className="custom-component"
        position={[1, 1, 2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2, 2]}
        raycast={(event, intersection) => {
          // Custom raycasting logic
          if (intersection) {
            alert("Inter")
            // Handle interaction with the HTML element
          }
        }}
        style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}
        centerX centerY

        >
           <NameComponent/>
          </Html> */}
      </Canvas>
      </div>
      
    </React.Fragment>


  );
};

export default ProgrammerModel;
