import React,{useState,useRef} from 'react'
import { AddBtn,CheckBox,Todo,TodoLayer,Input} from './style';
export default function TodoItem({
    todoItem: { isCompleted, userId, id, todo },
    todoItem,
    HandleDelete,
    HandleUpdate,
  }) {
  const inputRef = useRef();
  const [onModifyMode, setOnModifyMode] = useState(false);
  const [todoitem, setTodoitem] = useState(todoItem);

  const handleDelete = () => {
    HandleDelete(id);
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const inputvalue = inputRef.current.value;
    HandleUpdate({ ...todoitem, todo: inputRef.current.value, isCompleted : false}); //todo,checked 변경

    setTodoitem((prev) => { //비동기라서 ref값을 못가져오기때문에 따로 변수 선언
        return { ...prev, todo: inputvalue};
      });
    inputRef.current.value = ``;
    setOnModifyMode((prev) => !prev);
  }
  const HandleClick = (e) =>{
    e.preventDefault();
    setOnModifyMode((prev) => !prev);
  }

  const handleCheckbox = (e)=>{
    // e.preventDefault();
    HandleUpdate({ ...todoitem ,isCompleted : e.target.checked }); //todo 변경
  }
  return (
    <>
        <TodoLayer key={id}>
            {
                onModifyMode && 
                (<>
                <CheckBox type="checkbox" name ="todo"/>
                <Input data-testid="modify-input" defaultValue={todo} ref={inputRef}/>
                <AddBtn data-testid="submit-button" onClick={handleSubmit}>제출</AddBtn>
                <AddBtn data-testid="cancel-button" onClick={HandleClick}>취소</AddBtn>
                </>)
            }
            {
            !onModifyMode && (<>
            <CheckBox type="checkbox" name="todo" defaultChecked={isCompleted} onChange={handleCheckbox}
            />
            <Todo>{todo}</Todo> 
            <AddBtn data-testid="modify-button" onClick={HandleClick} >수정</AddBtn>
            <AddBtn data-testid="delete-button" onClick={handleDelete}>삭제</AddBtn> 
                    </>)
            }
        </TodoLayer>
    </>
  )
}
