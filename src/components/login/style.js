import styled from 'styled-components';

export const SignForm =styled.form`
max-width : 600px;
margin : 0 auto;
display : flex;
flex-direction: column;
align-items:center;
`;
export const Input = styled.input`
width : 350px;
height : 44px;
padding: 16px 10px;
background: #F9F9FD;
border: 0.5px solid #C9C6E1;
border-radius: 5px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
color: #C4C0DD;
box-sizing: border-box;
margin-bottom : 8px;
`;
export const Title =styled.div`
margin-top : 51px;
font-weight: 800;
font-size: 24px;
text-align: center;;
margin-bottom : 8px;
`;
export const SignBtn =styled.button`
width : 350px;
height : 44px;
padding: 16px 10px;
gap: 10px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 100%;
border-radius: 5px;
border : none;
margin-bottom : 16px;
`;

export const Label = styled.label`
width : 350px;
box-sizing: border-box;
font-size: 14px;
text-align : left;
`