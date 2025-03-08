//* Assets Imports
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//* Components Imports
import StringCalculator from "./components/StringCalculator";

//* Styles Imports
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <StringCalculator />
      </div>
    </>
  );
}

export default App;
