import "./App.css"
import Card from "./Component/Card/Card";
// import UseReducer from "./Component/test/useR";
import Listcard from "./Component/Card/Listcard";
import { GlobalStyle } from "./Global.Style";
// import YoutubeList from "./Component/Youtube/youtubeList";
// import Toggle from "./Component/Toggle/Toggle";
// import Game from "./Component/gameXO/Game";

function App() {
  return (
    < div >
      <GlobalStyle></GlobalStyle>
      {/* <YoutubeList></YoutubeList>
      <Toggle></Toggle>
      <Game></Game> */}
      <Listcard>
        <Card secondary={"true"}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Listcard>
      {/* <UseReducer></UseReducer> */}

    </div>
  );
}


export default App;
