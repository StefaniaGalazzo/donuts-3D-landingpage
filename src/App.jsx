/* eslint-disable react/no-unknown-property */
// store https://poly.pizza/m/BvRLKgGwc6 Donut Store by J-Toastie [CC-BY] via Poly Pizza
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/donuts-3D-landingpage" element={<Home />} />
        <Route path="/donuts-3D-landingpage/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
