import { useScroll } from "@react-three/drei"
import { useCurrentSheet } from "@theatre/r3f"

export default function Scene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()



  return (
    <div></div>
  )
}