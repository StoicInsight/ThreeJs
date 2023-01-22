import { PerspectiveCamera } from "three";

const createCamera = () => {
  const camera = new PerspectiveCamera(
    35, // Field of view
    1, // Aspect ratio 
    0.1, // Near clipping plane
    100 // Far clipping plane
  )
  // Move the camera back so we can view the scene
  camera.position.set(0, 0, 10)

  return camera
}

export { createCamera }