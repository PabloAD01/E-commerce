import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
    console.log(count);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex gap-5">
          <button /*añade estilos al boton utilizando tailwind*/
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
        <p>Count: {count}</p>
        <hr />
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
