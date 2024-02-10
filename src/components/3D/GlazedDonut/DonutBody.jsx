/* eslint-disable react/prop-types */
import { animated } from "@react-spring/three";

export default function DonutBody({
  position,
  nodes,
  materials,
  donutIngredient,
}) {
  return (
    <>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.aiStandardSurface3SG}
        material-color={donutIngredient.donut.color}
        position={position}
      />
    </>
  );
}
