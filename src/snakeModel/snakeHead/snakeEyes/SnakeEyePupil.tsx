import * as VERT from "./snakeEyesVertices";

function snakeEyePupil() {
  return (
    <>
      <mesh
        position={[VERT.verticesA[0], VERT.verticesA[1], VERT.verticesA[2]]}
      >
        <sphereGeometry args={[VERT.eyePupilRadius, 32, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh
        position={[VERT.verticesB[0], VERT.verticesB[1], VERT.verticesB[2]]}
      >
        <sphereGeometry args={[VERT.eyePupilRadius, 32, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}

export default snakeEyePupil;
