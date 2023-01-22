import * as THREE from 'three'

// Scene 
const scene = new THREE.Scene()

// Create Sphere
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
const material = new THREE.MeshBasicMaterial( { color: 0xffff00} )
const torusKnot = new THREE.Mesh( geometry, material )
scene.add(torusKnot)

// Light 
const light = new THREE.PointLight(0xfffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera( 45, 800 / 600 )
camera.position.z = 50
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webGL')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(800, 600)
renderer.render(scene, camera)
