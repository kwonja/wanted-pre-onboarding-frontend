import React,{useEffect,useState,useRef} from 'react'
import TodoItem from './TodoItem';
import {createTodo,deleteTodo,updateTodos,getTodos }from '../../apis/todo';
import { Input,AddBtn } from './style';
export default function Todo() {

  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const HandleSubmit = async(e)=>{
    e.preventDefault(); //새로고침 -> 랜더링을 위해 주석처리함
    const newTodo={
        "todo" : inputRef.current.value
    }
    const newtodo = await createTodo(newTodo); //필요할때만 가져와 랜더링을 줄인다.
    setTodos( (prev) =>[...prev,newtodo.data])
    inputRef.current.value='';
  }
  const HandleDelete = async(id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  const HandleUpdate = (todo) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
    updateTodos(todo);
    // onGet()
  };
  const onGet = async()=>{
    const data = await getTodos(); //axois는 promise를 반환하기때문에 await로 비동기 처리를 해줘야함
                                   //await를 사용하려면 async를 사용해야함
    setTodos(data)
  }
  useEffect(() =>{
    onGet()
  }
,[])
  return (
    <div className='todo'>
    <form onSubmit={HandleSubmit}>
    <label htmlFor='createTodo'></label>
    <Input type="text" id="createTodo" data-testid="new-todo-input" placeholder='오늘 할일을 입력해주세요' ref={inputRef}/>
    <AddBtn data-testid="new-todo-add-button">추가</AddBtn>
    </form>
    {todos.map( (todo) =>(
        <TodoItem 
        key={todo.id}
        todoItem={todo}
        HandleUpdate={HandleUpdate}
        HandleDelete={HandleDelete}
        />
    ) )}
    </div>
  )
}