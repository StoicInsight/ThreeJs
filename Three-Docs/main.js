// import * as THREE from 'three'

// // Scene 
// const scene = new THREE.Scene()

// // Create Sphere
// const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00} )
// const torusKnot = new THREE.Mesh( geometry, material )
// scene.add(torusKnot)

// // Light 
// const light = new THREE.PointLight(0xfffff, 1, 100)
// light.position.set(0, 10, 10)
// scene.add(light)

// // Camera
// const camera = new THREE.PerspectiveCamera( 45, 800 / 600 )
// camera.position.z = 50
// scene.add(camera)

// // Renderer
// const canvas = document.querySelector('.webGL')
// const renderer = new THREE.WebGLRenderer({ canvas })
// renderer.setSize(800, 600)
// renderer.render(scene, camera)

import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color('#ff0000');

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);