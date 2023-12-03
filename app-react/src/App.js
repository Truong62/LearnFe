import "./App.css"
import YoutubeList from "./Component/Youtube/youtubeList";
import Toggle from "./Component/Toggle/Toggle";
import Game from "./Component/gameXO/Game";

function App() {
  return (
    < div >
      <YoutubeList></YoutubeList>
      <Toggle></Toggle>
      <Game></Game>
    </div>
  );
}


export default App;
