 /* eslint-disable no-unused-vars */
import { useState } from 'react'
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
      <div className='main-container w-full h-screen flex flex-col justify-center items-center gap-10 bg-gray-100'>
        <h1 className='text-4xl font-bold text-gray-800 uppercase'>Schedule your day</h1>
        <div className="form bg-white shadow-lg rounded-lg p-8">
          <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <h1 className='bg-green-500 p-3 rounded-lg text-white text-center'>Enter your tasks here</h1>
            <div className="input-wrapper flex gap-3">
              <input className='flex-grow border-2 border-gray-300 px-4 py-2 rounded-lg text-lg focus:outline-none focus:border-green-500' type="text" placeholder='Enter your task' value={Todo} onChange={handleChange}/>
              <input className='bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600' type="submit" value="Add" />
            </div>
          </form>
          <div className="task-container mt-5">
            {Todos.map((todo, index) => {
              return (
                <div className="All-Todos flex flex-col w-full gap-3 mt-3" key={index}>
                  <div className="task-wrapper w-full flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <p className='text-lg font-medium'>{index + 1}. {todo}</p>
                    <div className="button-wrapper flex gap-2">
                      <button className='bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600' onClick={() => handleDelete(index)}>Delete</button>
                      <button className='bg-blue-500 py-1 px-4 rounded-lg text-white hover:bg-blue-600' onClick={() => handleEdit(index)}>Edit</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo