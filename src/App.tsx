import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper/Wrapper";
import Game from "./Components/Game/Game";

function App() {
  return (
    <Wrapper>
      <Canvas>
        <Game />
      </Canvas>
    </Wrapper>
  );
}

export default App;
