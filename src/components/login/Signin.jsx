import React,{useEffect,useState} from 'react'
import {useNavigate } from "react-router-dom";
import { login } from '../../apis/auth';
import { Input,Title,SignForm,Label,SignBtn } from './style';
import {setLocalStorage } from '../../utils/utils'
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
            setLocalStorage(response.data.access_token)
            navigate("/todo");
        }
        SignIn()
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
    <Title>로그인페이지</Title>
    <SignForm onSubmit={handleSubmit}>
    <Label htmlFor='email'>이메일</Label>
    <Input id="email" data-testid="email-input"  onChange={handleEmailchange} placeholder='@ 포함'/><br/>
    <Label htmlFor='password'>비밀번호</Label>
    <Input id ="password" data-testid="password-input" onChange={handlePasswordChange} placeholder='8자리이상'/><br/>
    <SignBtn data-testid="signin-button" disabled={!disable}>로그인</SignBtn>
    </SignForm>
    </>
  )
}