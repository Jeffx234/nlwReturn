import { render } from "react-dom";
import { StrictMode } from "react";
import { Widget } from "./components/Widget";

const App = () => {
  return (
    <StrictMode>
      <Widget />
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
