import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChooseColors from "./pages/ChooseColors";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/choose"
          element={<ChooseColors />}
        />
        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
