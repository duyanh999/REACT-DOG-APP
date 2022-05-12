import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
function Privaterouter({isLogged}) {
  return isLogged ? <Outlet/> : <Navigate to ='/login'/>
}

export default Privaterouter