import React,{useEffect,useState} from 'react'
import {useNavigate } from "react-router-dom";
import { login } from '../../apis/auth';
import axios from 'axios'
export default function Signin() {
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [disable,setDisable]=useState(true)

    const handleEmailchange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
      };
    const handleSubmit =  async(e) =>{
        if (email.includes('@') && password.length >= 8) //정상 회원가입
        {
        e.preventDefault();
        const Reigster ={
            "email" : email,
            "password" : password
        }
        const SignIn = async()=>{
            const response = await login(Reigster)
            localStorage.setItem('access_token', response.data.access_token);
            navigate("/todo");
        }
        SignIn()
        // try{
        //      const response =await axios(
        //         {
        //             method : "POST",
        //             url : "http://localhost:8000/auth/signin",
        //             data :  Reigster,
        //             headers : {"Content-Type" : "application/json"},
        //         });
        //         localStorage.setItem('access_token', response.data.access_token);
        // }catch(error){
        //     console.log(error);
        // } 
    }
    }
    useEffect( ()=>{

        if (email.includes('@') && password.length >= 8) 
        {
            setDisable(true)
        } 
        else{
            setDisable(false)
        }

    },[email,password])
  return (
    <>
    <h2>로그인페이지</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor='email'>이메일</label>
    <input id="email" data-testid="email-input"  onChange={handleEmailchange} placeholder='@ 포함'/><br/>
    <label htmlFor='password'>비밀번호</label>
    <input id ="password" data-testid="password-input" onChange={handlePasswordChange} placeholder='8자리이상'/><br/>
    <button data-testid="signup-button" disabled={!disable}>로그인</button>
    </form>
    </>
  )
}
