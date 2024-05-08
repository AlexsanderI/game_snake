import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper/Wrapper";
import Game from "./Components/Game/Game";
// import GameButtons from "./Components/GameButtons/GameButtons";

function App() {
  return (
    <Wrapper>
      <Canvas>
        <Game />
      </Canvas>
      {/* <GameButtons /> */}
    </Wrapper>
  );
}

export default App;
