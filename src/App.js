import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Callback from './pages/Callback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/callback" element={<Callback />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
