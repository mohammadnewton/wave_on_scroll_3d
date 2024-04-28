import React from 'react'

export default function Model() {
  return (
    <mesh scale={[3, 3, 1]}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <meshBasicMaterial wireframe={true} color="red" />
    </mesh>
  )
}
