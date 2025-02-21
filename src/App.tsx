import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <div className="App">
      <h1>Translator</h1>
      <p>{fromLanguage}</p>
      <button onClick={() => setFromLanguage("de")}>Cambiar a Español</button>
    </div>
  );
}

export default App;
