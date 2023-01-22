import * as THREE from 'three'
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js'
import Stats from 'https://threejs.org/examples/jsm/libs/stats.module.js'
import { GUI } from 'https://threejs.org/examples/jsm/libs/lil-gui.module.min.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)

const stats = Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()
const cubeFolder = gui.addFolder('Cube')
cubeFolder.add(cube.scale, 'x', -5, 5)
cubeFolder.add(cube.scale, 'y', -5, 5)
cubeFolder.add(cube.scale, 'z', -5, 5)
cubeFolder.open()
const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.open()

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    controls.update()
    render()
    stats.update()
}

function render() {
    renderer.render(scene, camera)
}

animate()

// import {
//   BoxBufferGeometry,
//   Color,
//   Mesh,
//   MeshBasicMaterial,
//   PerspectiveCamera,
//   Scene,
//   WebGLRenderer,
// } from 'three';

// Get a reference to the container element that will hold our scene
// const container = document.querySelector('#scene-container');

// // create a Scene
// const scene = new Scene();

// // Set the background color
// scene.background = new Color('skyblue');

// // Create a camera
// const fov = 35; // AKA Field of View
// const aspect = container.clientWidth / container.clientHeight;
// const near = 0.1; // the near clipping plane
// const far = 100; // the far clipping plane

// const camera = new PerspectiveCamera(fov, aspect, near, far);

// // every object is initially created at ( 0, 0, 0 )
// // move the camera back so we can view the scene
// camera.position.set(0, 0, 10);

// // create a geometry
// const geometry = new BoxBufferGeometry(2, 2, 2);

// // create a default (white) Basic material
// const material = new MeshBasicMaterial();

// // create a Mesh containing the geometry and material
// const cube = new Mesh(geometry, material);

// // add the mesh to the scene
// scene.add(cube);

// // create the renderer
// const renderer = new WebGLRenderer();

// // next, set the renderer to the same size as our container element
// renderer.setSize(container.clientWidth, container.clientHeight);

// // finally, set the pixel ratio so that our scene will look good on HiDPI displays
// renderer.setPixelRatio(window.devicePixelRatio);

// // add the automatically created <canvas> element to the page
// container.append(renderer.domElement);

// // render, or 'create a still image', of the scene
// renderer.render(scene, camera);