import "./Home.css";
import axios from "axios";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useContext} from 'react'
import { CartContext } from "../../Contexts/CartContexts";
import {update} from '../loginSlice'

let axiosJWT = axios.create();
const Home = () => {
  const dispatch = useDispatch()
  const [timeout, setTimeout] = useState("");
  // const { setSuccess } = useContext(CartContext);
  const logout = () => {
    window.localStorage.clear()
    window.location.href = "/login"
    // setSuccess(false)
    axiosJWT.get("http://localhost:8080/v1/dogs");
    

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
