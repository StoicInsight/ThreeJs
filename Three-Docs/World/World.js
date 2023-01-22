import { createCube } from "./components/cube";
import { createCamera } from "./components/camera";
import { createScene } from './components/scene';

import { createRenderer } from './systems/renderer';
import { Resizer } from "./systems/Resizer";


let camera;
let renderer;
let scene;

class World  {
  constructor(container){
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()
    scene.add(cube)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }