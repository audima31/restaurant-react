import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Menu from "./components/Menu/Menu";
import Reservations from "./components/Reservations/Reservations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact></Route>
        <Route path="/menu" element={<Menu />} exact></Route>
        <Route path="/reservations" element={<Reservations />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
