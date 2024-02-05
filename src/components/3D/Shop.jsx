/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Shop() {
  const shop = useGLTF("./donut-store.glb");
  const ref = useRef();

  const [initialRotation] = useState([-0.1, 10, 0]);
  // eslint-disable-next-line no-unused-vars
  const [currentRotation, setCurrentRotation] = useState(initialRotation);

  useFrame(({ mouse }) => {
    const rotationSpeed = 0.5;
    const newRotation = [
      initialRotation[0] - mouse.y * rotationSpeed,
      initialRotation[1] + mouse.x * rotationSpeed,
      initialRotation[2],
    ];
    setCurrentRotation(newRotation);
    ref.current.rotation.x = newRotation[0];
    ref.current.rotation.y = newRotation[1];
    ref.current.rotation.z = newRotation[2];
  });
  return (
    <>
      <group ref={ref} position={[-2.8, -0.3, 3.5]} rotation={initialRotation}>
        <primitive object={shop.scene} scale={[0.6, 0.6, 0.6]} />
      </group>
    </>
  );
}
