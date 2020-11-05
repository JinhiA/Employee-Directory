import React from "react";
import Employee from "./pages/Employee";
// import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="jumbotron">
        <h1>Employee Directory</h1>
        <h4>To filter through employees, click on the header of the column you wish to filter.</h4>
      </header>
      <Employee />
    </div>
  );
}

export default App;