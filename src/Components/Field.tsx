import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../assets/field.jpg";
import { FieldsProps } from "../types/field";

const Fields: React.FC<FieldsProps> = ({ size }) => {
  const texture = useTexture(floorTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial
          // color="gray"
          map={texture}
          map-repeat={[size, size]}
        />
      </mesh>
    </group>
  );
};

export default Fields;

// import * as THREE from "three";
// import { useTexture } from "@react-three/drei";
// import { PlaneGeometry } from "three";
// import floorTexture from "../assets/field.jpg";
// import { FieldsProps } from "../types/field";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

// const Fields: React.FC<FieldsProps> = ({ size }) => {
//   const gltf = useLoader(GLTFLoader, "/texture.glb");
//   const texture = useTexture(floorTexture);
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   console.log(size);

//   // Рассчитаем количество повторений модели по горизонтали и вертикали
//   const repeatCountX = Math.ceil(size / gltf.scene.children[0].scale.x);
//   const repeatCountY = Math.ceil(size / gltf.scene.children[0].scale.y);

//   // Создаем группу для хранения повторяющихся моделей
//   const grassModels = [];

//   // Добавляем повторяющиеся модели в группу
//   for (let i = 0; i < repeatCountX; i++) {
//     for (let j = 0; j < repeatCountY; j++) {
//       const clonedModel = gltf.scene.clone();
//       clonedModel.position.set(
//         i * gltf.scene.children[0].scale.x,
//         j * gltf.scene.children[0].scale.y,
//         0
//       );
//       grassModels.push(
//         <primitive
//           key={`${i}-${j}`}
//           object={clonedModel}
//           rotation={[1.565, 0, 0]}
//         />
//       );
//     }
//   }

//   return (
//     <group>
//       {/* Плоскость */}
//       <mesh position={[0, 0, 0]} receiveShadow>
//         <planeGeometry args={[size, size]} />
//         <meshStandardMaterial map={texture} map-repeat={[size, size]} />
//       </mesh>

//       {/* Модель */}
//       {/* <group position={[-10, 0, -0.2]} rotation={[0, 0, 0]}>
//         {grassModels}
//       </group> */}
//     </group>
//   );
// };

// export default Fields;
