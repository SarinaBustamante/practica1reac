import React from 'react'
import { useSelector } from "react-redux";

import logo from '../../../logo.svg';

const Logo = () => {
  const defaultState = useSelector(state => state.default);
  // <h1>{defaultState.name}</h1>
  return (
    <>
    <img src={logo} className="App-logo" alt="logo"/>
    <h1>{defaultState.name}</h1>
</>

    
  )
}
export default Logo;