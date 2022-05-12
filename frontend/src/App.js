import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogsPage';
import Cart from './components/Cart/Cart';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from './Contexts/CartContexts';
import Login from './Login';
import Register from './Register'
import ListUsers from './components/Users/ListUsers';
import Privaterouter from './components/Privaterouter';
import TodoList from './components/TodoList';
import Admin from './components/Admin';
import {useSelector } from 'react-redux'

function App() {
  const [allDogs,setAllDogs] = useState([]);
  const [myCart,addToCart] = useState([{}]);
  const [total,setTotal] = useState(0);
  
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/dogs");
      return res;
    }
    getData().then((res) => setAllDogs(res.data));
    
    
  },[]);
  const logins = useSelector((state) => state.login)
  const [success,setSuccess] = useState(logins)
  
  return (
    
    <CartContext.Provider value={{myCart,addToCart,total,setTotal,setSuccess}}>
      <header className='name'> DUYANH PETSHOP </header>
      <Router>
        <NavBar/>
        <div className='page-container'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route element={<Privaterouter isLogged={success} />}>
            <Route path="/dogs" element = {<DogsPage allDogs={allDogs} />} />
            <Route path='/cart' element = {<Cart/>}/> 
            <Route path='/admin' element={<Admin/>}/> 
            </Route>
            <Route path='/register' element ={<Register/>}/>
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
   
  );
}

export default App;
