/* eslint-disable react/prop-types */

import { useSpring, animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Glaze from "./Glaze";
import DonutBody from "./DonutBody";
import ConfettiSquared from "./ConfettiSquared";
import ConfettiRounded from "./ConfettiRounded";

export default function GlazedDonut({
  props,
  position,
  donutIngredient,
  rotation,
}) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/pink_glazed_donut/scene.gltf");

  const {
    glazePosition,
    donutPosition,
    confettiRoundPosition,
    confettiSquarePosition,
  } = useSpring({
    from: {
      glazePosition: [0, 0, 0.2],
      donutPosition: [0, 0, -1],
      confettiRoundPosition: [0, 0, 0.8],
      confettiSquarePosition: [0, 0, 1.5],
    },
    to: {
      glazePosition: [0, 0, 0],
      donutPosition: [0, 0, 0],
      confettiRoundPosition: [0, 0, 0],
      confettiSquarePosition: [0, 0, 0],
    },
    config: {
      mass: 1,
      tension: 300,
      friction: 30,
    },
    // loop: true,
  });

  return (
    <animated.group
      {...props}
      dispose={null}
      ref={group}
      position={position}
      rotation={rotation}
    >
      <Glaze
        position={glazePosition}
        nodes={nodes}
        materials={materials}
        donutIngredient={donutIngredient}
      />
      <DonutBody
        position={donutPosition}
        nodes={nodes}
        materials={materials}
        donutIngredient={donutIngredient}
      />

      {donutIngredient.confetti.squared && (
        <ConfettiSquared
          position={confettiSquarePosition}
          nodes={nodes}
          materials={materials}
        />
      )}
      {donutIngredient.confetti.rounded && (
        <ConfettiRounded
          position={confettiRoundPosition}
          nodes={nodes}
          materials={materials}
        />
      )}
    </animated.group>
  );
}

useGLTF.preload("./models/glazed-donut.gltf");
