import axios from 'axios';
import { BASE_URL } from './config';
import { getLocalStorageToken } from '../utils/utils';
export async function createTodo(todo) {
    try{
       return await axios(
        {
                    method : "POST",
                    url : `${BASE_URL}todos`,
                    data :  todo,
                    headers : {"Content-Type" : "application/json" , Authorization: `Bearer ${getLocalStorageToken()}`},
        });
    }catch(err)
    {
        console.log(err)
    }
  }

  export async function deleteTodo(id) {
    return await axios({
      url : `${BASE_URL}todos/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getLocalStorageToken()}`,
      },
    });
  }
  export async function updateTodos(todo) {
    return await axios(
        {
            method : "PUT",
            url : `${BASE_URL}todos/${todo.id}`,
            data :  {
                "todo" : todo.todo,
                "isCompleted" : todo.isCompleted
            },
            headers : {"Content-Type" : "application/json" , Authorization: `Bearer ${getLocalStorageToken()}`},
        })
  }
  export async function getTodos() {
    try{
    const response = await axios(`${BASE_URL}todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getLocalStorageToken()}`,
      },
    });
    return response.data
    }
    catch(err)
    {
        console.log(err);
    }
  }