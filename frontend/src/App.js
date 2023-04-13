import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Navigation from "./components/Shared/Navigation/Navigation.js";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
