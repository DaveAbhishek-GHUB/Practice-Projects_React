/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar' 

function Todo() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [forEdit, setforEdit] = useState(null);

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Todo){
      if(forEdit !== null){
        const updatedTodos = [...Todos];
        updatedTodos[forEdit] = Todo;
        setTodos(updatedTodos);
        setforEdit(null);
      }
      else{
        setTodos([...Todos, Todo]);
      }
      setTodo("");
    }
  }

  const handleDelete = (index) =>{
    const deletedTodo = Todos.filter((_, i) => i !== index);
    setTodos(deletedTodo);
  }

  const handleEdit = (index) => {
    setTodo(Todos[index]);
    setforEdit(index);
  }
  return (
    <>
    <Navbar/>
      <div className='main-container w-full h-screen flex flex-col justify-center items-center gap-10'>
        <h1 className='text-[2vw] uppercase'>Schedule your day</h1>
        <div className="form">
          <form className='flex w-[80vw] p-5 rounded-lg flex-col gap-5 border-black border-[1px]' onSubmit={handleSubmit}>
            <h1 className='bg-green-500 p-3 rounded-lg text-white'>Enter you tasks here</h1>
            <div className="input-wrapper flex gap-5">
            <input className='border-black border-[1px] px-2 py-1 rounded-xl text-[1vw]' type="text" placeholder='Enter your task' value={Todo} onChange={handleChange}/>
            <input className='' type="submit" />
            </div>
          </form>
          <div className="task-containe p-5 max-w-[80vw]">
            {Todos.map((todo, index)=>{
              return <div className="All-Todos flex flex-col w-full gap-3" key={index}>
                <div className="task-wrapper w-full flex justify-between">
                <p>{index+1}. </p>
                <p>{todo}</p>
                </div>
                <div className="button-wrapper w-full flex justify-between">
                <button className='bg-red-500 text-white py-1 px-2 rounded-lg' onClick={()=>handleDelete(index)}>Delete</button>
                <button className='bg-blue-500 py-1 px-5 rounded-lg text-white' onClick={()=>handleEdit(index)}>Edit</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
