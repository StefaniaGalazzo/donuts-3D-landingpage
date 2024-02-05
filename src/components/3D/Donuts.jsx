/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Detailed, Environment } from "@react-three/drei";

export default function Donuts({
  speed = 1,
  count = 100,
  depth = 105,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  return (
    <>
      <color attach="background" args={["#fbadd5"]} />
      {Array.from({ length: count }, (_, i) => (
        <Donut
          key={i}
          index={i}
          z={Math.round(easing(i / count) * depth)}
          speed={speed}
        />
      ))}
    </>
  );
}

//
//start DONUT
function Donut({ index, z, speed }) {
  const donut = useGLTF("./colored-donut.glb");
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const [data] = useState({
    y: THREE.MathUtils.randFloatSpread(height * 2),
    x: THREE.MathUtils.randFloatSpread(2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
    initialDistance: 5,
  });

  useFrame((state, dt) => {
    const initialZ = -z - data.initialDistance;
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        initialZ
      );

    // rotation
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );
    // If they're too far up, set them back to the bottom
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
    // not on bg
    // if (data.z > 40) data.z = initialZ;
  });

  return (
    <>
      <Detailed ref={ref} distances={[0, 65, 80]}>
        <primitive object={donut.scene.clone(true)} scale={[0.4, 0.4, 0.4]} />
        <Environment preset="warehouse" />
      </Detailed>
    </>
  );
}
/*
canvas camera settings:
> position: Specifica la posizione tridimensionale della telecamera nel mondo virtuale. 
> fov: Acronimo di "Field of View" (Campo di Vista), 
è l'ampiezza angolare del campo visivo della telecamera. 
Un valore più alto significa un campo visivo più ampio. 
> near: la distanza più vicina dalla telecamera in cui inizia il rendering. 
Gli oggetti più vicini di questa distanza possono essere tagliati. 
Un valore basso di near può causare problemi di z-fighting (sovrapposizione di oggetti a distanze molto vicine). 
> far: Specifica la distanza massima dalla telecamera oltre la quale gli oggetti non verranno renderizzati. 
Un valore più alto di far permette di vedere oggetti più lontani. 
*/
