import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <h2 style={count < 0 ? {color:"red"} : {color:"green"}}>{count}</h2>
      <div className="buttonscontainer">
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <button onClick={() => setCount(count - 1)}>Decrease</button>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
