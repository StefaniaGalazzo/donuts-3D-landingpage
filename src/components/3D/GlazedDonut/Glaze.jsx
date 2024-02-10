/* eslint-disable react/prop-types */
import { animated } from "@react-spring/three";

export default function Glaze({ position, nodes, materials, donutIngredient }) {
  return (
    <>
      <animated.mesh
        castShadow
        receiveShadow
        material-color={donutIngredient.glaze.color}
        geometry={nodes.Object_2.geometry}
        material={materials.aiStandardSurface4SG}
        position={position}
      />
      <animated.mesh
        castShadow
        receiveShadow
        material-color={donutIngredient.glaze.color}
        geometry={nodes.Object_3.geometry}
        material={materials.aiStandardSurface4SG}
        position={position}
      />
    </>
  );
}
