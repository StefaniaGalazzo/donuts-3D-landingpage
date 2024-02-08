/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Text } from "@react-three/drei";
import { useRef } from "react";

export default function CTA({ title, subtitle, cta }) {
  const navigateTo = useNavigate();
  const ref = useRef();

  const handleButtonClick = () => {
    console.log("Button clicked");
    navigateTo("/donuts-3D-landingpage/menu");
  };
  return (
    <group position={[1.5, 0, 0]}>
      <mesh>
        <boxGeometry args={[5.8, 3, -0.2]} />
        <meshBasicMaterial
          color="rgb(119, 0, 113)"
          opacity={0.7}
          transparent
          //   depthWrite={false}
        />
      </mesh>

      <Text
        castShadow
        color="white"
        fontSize={0.8}
        font="./fonts/Poppins-Black.ttf"
        anchorX="left"
        anchorY="bottom"
        position={[-1.9, 0, 1]}
      >
        {title}
      </Text>

      <Text
        color="white"
        fontSize={0.3}
        font="./fonts/Poppins-Medidum.ttf"
        anchorX="left"
        anchorY="top"
        position={[-1.9, 0, 1]}
      >
        {subtitle}
      </Text>

      {/* Bottone CTA */}
      <group
        position={[-1.4, -0.8, 1]}
        onClick={handleButtonClick}
        ref={ref}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        {/* Bottone (box) */}
        <mesh>
          <boxGeometry args={[1, 0.5, 0]} />
          <meshBasicMaterial color="rgb(180, 0, 150)" />
        </mesh>

        <Text
          color="white"
          fontSize={0.13}
          anchorX="center"
          font="./fonts/Poppins-Medium.ttf"
          anchorY="middle"
          position={[0, 0, 0.11]} // posiziona il testo davanti al bottone
        >
          {cta}
        </Text>
      </group>
    </group>
  );
}
