import React,{useState} from 'react'
import {NavLink, Link,useNavigate } from "react-router-dom";
import '../App.css';
import styled from 'styled-components';

const SubTitle = styled.div`
width : auto;
display : flex;
flex-direction: row;
gap: 37px;
`;

const Login =styled.button`
font-weight: 400;
font-size: 12px;
line-height: 15px;
background: #4BBFB4;
color: #000000;
border : none;
`;
const Text = styled.div`
font-size: 12px;
line-height: 15px;
background: #4BBFB4;
color: #000000;
`
const Signup =styled.button`
margin-right : 37px;
font-weight: 400;
font-size: 12px;
line-height: 15px; 
background: #4BBFB4;
padding:  0px;
color: #000000;
border : none;
`;
export default function Banner() {
    const [isopen,setIsopen]=useState(false);
    const navigate = useNavigate();
  const OnClick = () =>{
    setIsopen(true);
  }
  const handleLogout = () =>{
    localStorage.clear();
    navigate("/")
  }
  return (
    <>
            <div className='headertop'>
            <SubTitle>
            {
              localStorage.getItem('access_token') === null ? (<><Link to="/signin"><Login>signin</Login></Link>
              <Link to="/signup"><Signup>signup</Signup></Link></>) : (<> <Text>환영합니다! </Text> <Signup onClick={handleLogout}>로그아웃</Signup> </> )
            }
            </SubTitle>
          
            </div>
            <nav className="header">
            <NavLink className='Logo'to="/">원티드 사전과제</NavLink>
            <ul>
            <NavLink to="/todo"><li>Todo</li></NavLink>
            </ul>
            </nav>
    </>
  )
}