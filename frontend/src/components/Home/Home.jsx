import "./Home.css";
import axios from "axios";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {CartContext} from '../../Contexts/CartContexts'
let axiosJWT = axios.create();
const Home = () => {
  const { setSuccess } = useContext(CartContext);
  const [timeout, setTimeout] = useState("");
  const logout = () => {
    window.localStorage.clear()
    setSuccess(false)
    axiosJWT.get("http://localhost:8080/v1/dogs");
    try {
      const arrayOfData = JSON.parse(localStorage.getItem("login")).token
        .accessToken;
      setTimeout(arrayOfData);
    } catch (error) {
      console.log(error);
    }

    axiosJWT.interceptors.request.use(async (config) => {
      let date = new Date();
      const decodedToken = jwtDecode(timeout);
      if (decodedToken.exp < date.getTime() / 1000) {
        localStorage.clear();
      }
    });
  };

  return (
    <>
      <header> Welcome to my petshop </header>

      <div>
        <button className="dogs-btn-disabled" onClick={logout}>
          logout 
        </button>
        <button className="dogs-btn-disabled">
          <Link to="/dogs"> dogs </Link>
        </button>
        <button className="dogs-btn-disabled">
          <Link to="/admin"> admin </Link>
        </button>
        
      </div>
    </>
  );
};

export default Home;
