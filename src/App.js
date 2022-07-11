import logo from "./logo.svg";
import "./App.css";
import { decode } from "base-64";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Enter Query Params with data Key</h1>
        {window.location.href.split("?").length > 1 &&
          window.location.href.split("?")[1].split("=").length > 1 && (
            <>
              <p>
                Before Decoding Length of the characters is{" "}
                {window.location.href.split("?")[1].split("=")[1].length}
              </p>
              <p>
                After Decoding length{" "}
                {
                  decode(window.location.href.split("?")[1].split("=")[1])
                    .length
                }
              </p>
            </>
          )}
      </header>
    </div>
  );
}

export default App;
