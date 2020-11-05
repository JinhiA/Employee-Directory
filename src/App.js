import React from "react";
import Employee from "./pages/Employee";
// import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="jumbotron">
        Employee Directory
      </header>
      <Employee />
    </div>
  );
}

export default App;