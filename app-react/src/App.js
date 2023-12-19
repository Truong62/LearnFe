import "./App.css"
import Photolist from "./Component/Context/Photolist";
import { GalleryProvider } from "./Component/Context/gallery-context";


function App() {
 <div>
   <GalleryProvider>
  </GalleryProvider>
    <Photolist></Photolist>
 </div>
}



export default App;
