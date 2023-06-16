import axios from 'axios';
import { BASE_URL } from './config';
export async function login(Reigster) {
    try{
     return await axios(
        {
            method : "POST",
            url : `${BASE_URL}auth/signin`,
            data :  Reigster,
            headers : {"Content-Type" : "application/json"},
        });

    }catch(err)
    {
        console.log(err)
    }
  }
  export async function signup(Reigster) {
    try{
     return await axios(
        {
            method : "POST",
            url : `${BASE_URL}auth/signup`,
            data :  Reigster,
            headers : {"Content-Type" : "application/json"},
        }
        );

    }catch(err)
    {
        console.log(err)
    }
  }