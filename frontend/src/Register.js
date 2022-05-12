import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, Link } from "react-router-dom";
import axiox from "axios";
import { useRegisterUserMutation } from "./components/authApi";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const Register = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let history = useNavigate();
  const [registerUser, { data, isError, error }] = useRegisterUserMutation();

  useEffect(() => {
    if (data && data.access_token) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: data.access_token,
        })
      );
      setErrorMsg("");
      setUsername("");
      setPassword("");
      setLogoutUser(false);
      history("/");
    }
    if (isError) {
      setErrorMsg(error.data.message);
    }
  }, [data, isError]);

  const register = async (e) => {
    e.preventDefault();
    await registerUser({ username, password });
    //   axiox
    //     .post("http://localhost:5000/api/v1/auth/register", {
    //       username:email,
    //       password,
    //     })
    //     .then((response) => {
    //       console.log("response", response);
    //       localStorage.setItem(
    //         "login",
    //         JSON.stringify({
    //           userLogin: true,
    //           token: response.data.access_token,
    //         })
    //       );
    //       setError("");
    //       setEmail("");
    //       setPassword("");
    //       setLogoutUser(false);
    //       history.push("/");
    //     })
    //     .catch((error) => setError(error.response.data.message));
    // };
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Đăng ký</h2>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={register}
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
          Đăng ký
        </Button>
      </form>
      <p>
        Có tài khoản rồi thì <Link to="/login">Đăng nhập thôi</Link>
      </p>
    </div>
  );
};

export default Register;
