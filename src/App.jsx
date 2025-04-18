import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
