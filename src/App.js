import "./App.css";
import Square from "./components/Square";

function App() {
  const favColor = "My favorite color is blue";

  return (
    <div className="App">
      <Square propVar={favColor} />
    </div>
  );
}

export default App;
