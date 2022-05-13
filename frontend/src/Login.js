import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./Contexts/CartContexts";
import { useEffect } from "react";
import { useLoginUserMutation } from "./components/authApi";
import { useDispatch } from "react-redux";
import { update } from "./components/loginSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  let history = useNavigate();
  const [LoginUser, { data, isError, error, isSuccess }] =
    useLoginUserMutation();
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: data,
        })
      );

      const loginUser = {
        success: data.success,
      };
      dispatch(update(loginUser));

      setErrorMsg("");
      setUsername("");
      setPassword("");
      history("/");
    }
    if (isError) {
      setErrorMsg(error.data.message);
    }
  }, [data, isError]);

  const login = async (e) => {
    e.preventDefault();
    await LoginUser({ username, password });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Login</h2>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={login}
      >
        <TextField
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <p>
        Không có tài khoản <Link to="/register">Đăng ký</Link> một cái cho bản
        thân nào
      </p>
    </div>
  );
};

export default Login;
