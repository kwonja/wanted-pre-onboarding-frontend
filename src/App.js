import './App.css';
import React,{useEffect} from 'react'
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import Signin from './components/login/Signin'
import Signup from './components/login/Signup';
import Banner from './components/Banner';
import Main from './components/Main';
import Todo from './components/todo/Todo';
import { getLocalStorageToken } from './utils/utils';
function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect( ()=>{
    const access_token = getLocalStorageToken();
    if(access_token) //토큰이 존재할때
    {
    if(location.pathname ==="/signin" || location.pathname ==="/signup")
    {
      navigate("/todo")
    }
    }
    else{ //존재하지 않을때
      if(location.pathname === "/todo")
    {
      navigate("/signin")
    }
    }
  },[location,navigate])

  return (
    <>
    <Banner/>
      <Routes>
        <Route path ="/" element={<Main/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
