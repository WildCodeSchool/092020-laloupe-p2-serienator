import React from "react";

import "./App.css";

function App() {
  const value = 0;
  return (
    <main className="container">
      <div className="item">
        <h1>Hello world !</h1>
      </div>
      <div className="item">
        <p>Welcome to your fresh, lightweight, React App ! &#127752;</p>
      </div>
      <div className="item">
        <p>
          Start in the <code>App.jsx</code> component ! {value}
        </p>
      </div>
    </main>
  );
}

export default App;
