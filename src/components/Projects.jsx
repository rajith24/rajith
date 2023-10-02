import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import powerBI from "../../public/projects/pbi.png";

export const projects = [
  {
    title: "Power BI",
    url: powerBI,
    image: powerBI,
    description: "SQL query Azure Cosmos Database and create interactive visulaization.",
  },
  {
    title: "Azure Storage",
    url: "projects/fileExpUpload.jpg",
    image: "projects/fileExpUpload.jpg",
    description: "Created interactive UI/UX for Azure Blob Storage.",
  },
  {
    title: "Welcome Page",
    url: "https://www.youtube.com/watch?v=2eMzcFr_I3M",
    image: "projects/roomba.jpg",
    description: "Roomba robot vaccuming the welcome text.",
  },
  {
    title: "CARLA / ROS",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6693139267880804352?compact=1",
    image: "projects/lidar.jpg",
    description: "Shows Camera/Lidar sensor data mapped in ROS.",
  },
  {
    title: "Matlab ROS",
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6712703143462920192?compact=1",
    image: "projects/carla.jpg",
    description: "Shows car controlled in CARLA environment using ROS",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
