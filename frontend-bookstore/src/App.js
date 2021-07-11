import "./App.css";
import Login from "./Components/Login";
import Featured from "./Components/Featured";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Note Brook</h1>
        <Login></Login>
        <Featured></Featured>
      </header>
    </div>
  );
}

export default App;
