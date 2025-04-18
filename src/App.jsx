import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Row className="d-flex">
        <Col xs={12} lg={2}>
          <MyNavbar />
        </Col>
        <Col xs={12} lg={10}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
