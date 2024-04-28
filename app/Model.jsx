import React, { useRef } from "react";
import { useControls } from "leva";
import { fragment, vertex } from './Shader'
import { useFrame } from "@react-three/fiber";

export default function Model() {
  const image = useRef();

  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.25, min: 0, max: 2, step: 0.1 },
    waveLength: { value: 5, min: 0, max: 20, step: 0.5 },
  });

  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  })

  useFrame(() => {
    image.current.material.uniforms.uTime.value += 0.04;
    image.current.material.uniforms.uAmplitude.value = amplitude;
    image.current.material.uniforms.uWaveLength.value = waveLength;
  })

  return (
    <mesh ref={image} scale={[3, 3, 1]}>
      <planeGeometry args={[1, 1, 15, 15]} />
      {/* <meshBasicMaterial wireframe={true} color="red" /> */}
      <shaderMaterial
        wireframe={true}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
