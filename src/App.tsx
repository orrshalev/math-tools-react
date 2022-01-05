import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import BooleanAlgebra from "./pages/tools/BooleanAlgebra";
import RecursionSandbox from "./pages/tools/RecursionSandbox";
import BigOOptimization from "./pages/tools/BigOOptimization";
import Learn from "./pages/learn/Learn";
import Contact from "./pages/about/Contact";
import AboutWebsite from "./pages/about/AboutWebsite";
import AboutOrr from "./pages/about/AboutOrr";
import CartesianProductCalculator from "./pages/tools/CartesianProductCalculator";
import PowerSetCalculator from "./pages/tools/PowerSetCalculator";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<AboutWebsite />} />
        <Route path="/about/orr" element={<AboutOrr />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools/boolean-algebra" element={<BooleanAlgebra />} />
        <Route path="/tools/bigo-optimization" element={<BigOOptimization />} />
        <Route path="/tools/recursion-sandbox" element={<RecursionSandbox />} />
        <Route
          path="/tools/cartesian-product-calculator"
          element={<CartesianProductCalculator />}
        />
        <Route
          path="/tools/power-set-calculator"
          element={<PowerSetCalculator />}
        />
      </Routes>
    </Router>
  );
}

export default App;
