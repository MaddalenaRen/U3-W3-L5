import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../redux/reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput.trim() !== "") {
      dispatch(setUsername(usernameInput.trim()));
      navigate("/");
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="USERNAME"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <Button type="submit" className="mt-2">
          LOGIN
        </Button>
      </Form>
    </>
  );
};

export default Login;
