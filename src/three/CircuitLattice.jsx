import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Lattice({ pointer }) {
  const group = useRef(null)
  const nodes = useMemo(() => {
    const pts = []
    const spread = 3.2
    for (let i = 0; i < 42; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * spread * 2.2,
          (Math.random() - 0.5) * spread * 1.6,
          (Math.random() - 0.5) * spread * 1.4,
        ),
      )
    }
    return pts
  }, [])

  const lines = useMemo(() => {
    const segs = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.55) {
          segs.push(nodes[i], nodes[j])
        }
      }
    }
    return segs
  }, [nodes])

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(lines)
    return geo
  }, [lines])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.08 + pointer.current.x * 0.35
    group.current.rotation.x = Math.sin(t * 0.12) * 0.08 + pointer.current.y * 0.25
  })

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial
          color="#3dbaa4"
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 7 === 0 ? 0.045 : 0.028, 12, 12]} />
          <meshBasicMaterial
            color={i % 5 === 0 ? '#c4a574' : '#3dbaa4'}
            transparent
            opacity={0.88}
          />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2.4, 0.4, 0.2]}>
        <torusGeometry args={[1.7, 0.008, 12, 120]} />
        <meshBasicMaterial color="#3dbaa4" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[0.3, 1.1, 0.6]}>
        <torusGeometry args={[1.15, 0.006, 12, 100]} />
        <meshBasicMaterial color="#c4a574" transparent opacity={0.14} />
      </mesh>
    </group>
  )
}

function Scene({ pointer }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Lattice pointer={pointer} />
      </Float>
    </>
  )
}

export default function CircuitLattice({ active = true }) {
  const pointer = useRef({ x: 0, y: 0 })

  const onPointerMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    pointer.current = {
      x: (e.clientX - left) / width - 0.5,
      y: (e.clientY - top) / height - 0.5,
    }
  }

  if (!active) return null

  return (
    <div className="hero-canvas" onPointerMove={onPointerMove} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Scene pointer={pointer} />
      </Canvas>
    </div>
  )
}
