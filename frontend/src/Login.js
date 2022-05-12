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
// let axiosJWT = axios.create()
const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(true)
  const dispatch = useDispatch()
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
      
      // const arrayOfData = JSON.parse(localStorage.getItem('login')).token.success
      setSuccess(true)
      // setSuccess(data.success);
      // console.log(arrayOfData)
      setErrorMsg("");
      setUsername("");
      setPassword("");
      history("/");
    }
    if (isError) {
      setErrorMsg(error.data.message);
    }
  }, [data, isError]);
                                          
  const login = (e) => {
    e.preventDefault();
    LoginUser({ username, password });
    const loginUser = {
      success: success
    }
    dispatch(update(loginUser))
    // axiosJWT
    // .get("http://localhost:8080/v1/dogs")
    // try{
    //   const arrayOfData = JSON.parse(localStorage.getItem('login')).token.success;
    //   setSuccess(arrayOfData)
    //   console.log(arrayOfData)
    // }catch(error) {
    //   console.log(error)
    // };
  };
  // axios
  //   .post("http://localhost:5000/api/v1/auth/login", {
  //     username:email,
  //     password,
  //   })
  //   .then((response) => {
  //     console.log("response", response);
  //     localStorage.setItem(
  //       "login",
  //       JSON.stringify({
  //         userLogin: true,
  //         token: response.data,
  //       })
  //     )

  //   .catch((error) => setError(error.response.data.message));

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
