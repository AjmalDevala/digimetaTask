// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./container/ErrorPage";
import HomePage from "./container/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;