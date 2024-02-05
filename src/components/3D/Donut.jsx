/* eslint-disable no-undef */
// donut https://poly.pizza/m/9SOiQS7bncw // credits: Donut by Michael Fuchs [CC-BY] via Poly Pizza
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

export default function Donut() {
  const donut = useGLTF("./colored-donut.glb");
  console.log(donut, "DONUT");
  return (
    <>
      <OrbitControls enablePan enableZoom enableRotate />
      <primitive object={donut.scene} />
      <meshBasicMaterial attach="material" />
      <Environment preset="warehouse" />
      {/* <Detailed ref={ref} distances={[0, 65, 80]}>
        <mesh
          geometry={nodes.VR_headset_polySurface313.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose2_polySurface313.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose2_polySurface313_1.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313_1.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313_2.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313_3.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313_3_1.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313_4.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.nose3_polySurface313_4_1.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />

        <mesh
          geometry={nodes.nose4_polySurface313.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
        <mesh
          geometry={nodes.stache_polySurface313.geometry}
          material={materials.lambert2SG}
          material-emissive="#ff9f00"
        />
      </Detailed> */}
    </>
  );
}
