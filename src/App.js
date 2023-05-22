import React from "react";
import "./App.css";

function App() {
  return (
    <div className="s">
      <button>Button</button>
      <button className="success">Success</button>
      <button className="warning">Warning</button>
      <button className="error">Error</button>
      <button disabled>Disabled</button>
    </div>
  );
}

export default App;
