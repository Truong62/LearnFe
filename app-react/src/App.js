import "./App.css"
import Tooltip from "./Component/Tooltip";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={fallbackRender}>
      <Tooltip text="Hover me">Lorem ipsum dolor sit amet\.</Tooltip>
    </ErrorBoundary >

  );
}



export default App;
