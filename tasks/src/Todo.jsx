import React, { useState } from 'react'

const Todo = () => {
    let[todos, setTodos] = useState([])
    let[todoList, setTodoList] = useState('')
  return (
    <div>
        <input type="text" value={todoList} onChange={(e) =>setTodoList(e.target.value)} placeholder='Type Todo here...'/>
        <button onClick={ () => {
              if (todoList.trim()) {
                setTodos([...todos, todoList])
                setTodoList('')
                }
            }
        } > Add</button>
        <ul>
            {
                todos.map((todo, i) => (                   
                     <li key={i} className="flex justify-between items-center p-2 border-b">
                        {todo}
                        <button onClick={()=>setTodos(todos.filter((_, index)=> index !== i))}
                         className="text-red-500 hover:text-red-700"> Delete
                        </button>

                    </li>
                ))
            }
        </ul>

    {/* <ul>
        {todos.map((todo, i) => (
            <li key={i} className="flex justify-between items-center p-2 border-b">
                {todo}
                <button 
                     onClick={() => setTodos(todos.filter((_, index) => index !== i))}
                    className="text-red-500 hover:text-red-700"
                >
                    ✕
                </button>
            </li>
        ))}
    </ul> */}
    </div>
  )
}

export default Todo