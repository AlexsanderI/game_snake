import * as VERT from "./snakeEyesVertices";

function snakeEyeApple() {
  return (
    <>
      <mesh
        position={[VERT.verticesC[0], VERT.verticesC[1], VERT.verticesC[2]]}
      >
        <sphereGeometry args={[VERT.eyeAppleRadius, 32, 32]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh
        position={[VERT.verticesD[0], VERT.verticesD[1], VERT.verticesD[2]]}
      >
        <sphereGeometry args={[VERT.eyeAppleRadius, 32, 32]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
}

export default snakeEyeApple;
