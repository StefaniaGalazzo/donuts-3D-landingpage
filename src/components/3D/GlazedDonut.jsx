/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

// import { proxy, useProxy } from "valtio";
import { useGLTF } from "@react-three/drei";

const GlazedDonut = ({ props, position, donutIngredient, rotation }) => {
  const { nodes, materials } = useGLTF("./models/pink_glazed_donut/scene.gltf");

  return (
    <>
      <group {...props} position={position} rotation={rotation}>
        {/* <group id="glaze"> */}
        <mesh
          castShadow
          receiveShadow
          material-color={donutIngredient.glaze.color}
          geometry={nodes.Object_2.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          castShadow
          receiveShadow
          material-color={donutIngredient.glaze.color}
          geometry={nodes.Object_3.geometry}
          material={materials.aiStandardSurface4SG}
        />
        {/* </group> */}
        {/* <group id="donut"> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.aiStandardSurface3SG}
          material-color={donutIngredient.donut.color}
        />
        {/* </group> */}
        {/* <group id="squared-confetti"> */}
        {donutIngredient.confetti.squared && (
          <>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.aiStandardSurface2SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.aiStandardSurface2SG}
            />
          </>
        )}
        {/* </group> */}
        {/* <group id="round-confetti"> */}
        {donutIngredient.confetti.rounded && (
          <>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.aiStandardSurface4SG}
            />
          </>
        )}
        {/* </group> */}
      </group>
    </>
  );
};

export default GlazedDonut;
// useGLTF.preload("./models/glazed-donut.gltf");
