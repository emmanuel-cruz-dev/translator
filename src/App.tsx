import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

function reducer(state, action) {}

function App() {
  return (
    <div className="App">
      <h1>Translator</h1>
      <p>{initialState.fromLanguage}</p>
    </div>
  );
}

export default App;
