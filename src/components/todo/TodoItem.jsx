import React,{useEffect,useState,useRef} from 'react'

export default function TodoItem({
    todoItem: { isCompleted, userId, id, todo },
    todoItem,
    HandleDelete,
    HandleUpdate,
  }) {
  const inputRef = useRef();
  const checkRef = useRef();
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
        <li key={id}>
            <label>
            {
                onModifyMode && (<>
                <input type="checkbox" name ="todo" ref={checkRef}/>
                <input data-testid="modify-input" defaultValue={todo} ref={inputRef}/>
                <button data-testid="submit-button" onClick={handleSubmit}>제출</button>
                <button data-testid="cancel-button" onClick={HandleClick}>취소</button>
                </>)
            }
            {
            !onModifyMode && (<>
            <input type="checkbox" name="todo" defaultChecked={isCompleted} onChange={handleCheckbox}
            />
            <span>{todo}</span> 
            <button data-testid="modify-button" onClick={HandleClick} >수정</button>
            <button data-testid="delete-button" onClick={handleDelete}>삭제</button> 
                    </>)
            }
            </label>
        </li>
    </>
  )
}
