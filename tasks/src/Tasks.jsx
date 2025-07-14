import React, { useState } from 'react';
import DisplayText from './DisplayText';
import BackGround from './BackGround';
import Todo from './Todo';
const Tasks = () => {
  // Task 1: Counter
  const [count, setCount] = useState(0);

  // Task 2: Toggle Visibility
  const [isVisible, setIsVisible] = useState(true);

  // Task 3: Text Input
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  // Task 4: Color Changer
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Task 5: Todo List
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Task 6: User Profile
  const [user, setUser] = useState({ name: '', age: '', email: '' });

  // Task 7: Image Toggle
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['🐶', '🐱', '🐸', '🦊'];

  // Task 8: Like Counter
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">React useState Practice Tasks</h1>

      {/* Task 1: Simple Counter */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 1: Counter</h2>
        <p className="text-2xl mb-4">Count: {count} </p>
        <div className="space-x-2">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Increment
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button 
            onClick={() => setCount(0)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Task 2: Toggle Visibility */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 2: Toggle Visibility</h2>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && (
          <p className="text-lg text-green-600 font-medium">
            Hello! This message can be toggled!
          </p>
        )}
      </div>
        <div>
            <DisplayText></DisplayText>
        </div>
      {/* Task 3: Text Input and Display */}
      {/* <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 3: Text Input</h2>
        <div className="space-y-4">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type something..."
            className="border px-3 py-2 rounded w-full"
          />
          <button 
            onClick={() => setDisplayText(inputText)}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Display Text
          </button>
          <button 
            onClick={() => {setDisplayText(''); setInputText('');}}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
          >
            Clear
          </button>
          {displayText && (
            <p className="text-lg font-medium">You typed: "{displayText}"</p>
          )}
        </div>
      </div> */}

      {/* Task 4: Background Color Changer */}
      {/* <div className="border p-4 rounded-lg" style={{ backgroundColor }}>
        <h2 className="text-xl font-semibold mb-4">Task 4: Background Color Changer</h2>
        <div className="space-x-2">
          <button 
            onClick={() => setBackgroundColor('lightblue')}
            className="bg-blue-300 px-4 py-2 rounded hover:bg-blue-400"
          >
            Blue
          </button>
          <button 
            onClick={() => setBackgroundColor('lightgreen')}
            className="bg-green-300 px-4 py-2 rounded hover:bg-green-400"
          >
            Green
          </button>
          <button 
            onClick={() => setBackgroundColor('lightcoral')}
            className="bg-red-300 px-4 py-2 rounded hover:bg-red-400"
          >
            Red
          </button>
          <button 
            onClick={() => setBackgroundColor('white')}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div> */}
      <div>
        <BackGround>

        </BackGround>
      </div>
       <Todo></Todo>

      {/* Task 5: Simple Todo List */}
      {/* <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 5: Todo List</h2>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              placeholder="Add a todo..."
              className="border px-3 py-2 rounded flex-1"
            />
            <button 
              onClick={() => {
                if (todoInput.trim()) {
                  setTodos([...todos, todoInput]);
                  setTodoInput('');
                }
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {todos.map( (todo, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <span>{todo}</span>
                <button 
                  onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      {/* Task 6: User Profile Form */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 6: User Profile</h2>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            className="border px-3 py-2 rounded w-full"
          />
          <input 
            type="number" 
            placeholder="Age"
            value={user.age}
            onChange={(e) => setUser({...user, age: e.target.value})}
            className="border px-3 py-2 rounded w-full"
          />
          <input 
            type="email" 
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            className="border px-3 py-2 rounded w-full"
          />
          <button 
            onClick={() => setUser({ name: '', age: '', email: '' })}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Clear Profile
          </button>
          {(user.name || user.age || user.email) && (
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold">Profile Preview:</h3>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </div>
      </div>

      {/* Task 7: Image/Emoji Carousel */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 7: Image Carousel</h2>
        <div className="text-center space-y-4">
          <div className="text-8xl">{images[currentImage]}</div>
          <div className="space-x-2">
            <button 
              onClick={() => setCurrentImage(currentImage > 0 ? currentImage - 1 : images.length - 1)}
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
              Previous
            </button>
            <button 
              onClick={() => setCurrentImage((currentImage + 1) % images.length)}
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
              Next
            </button>
          </div>
          <p>Image {currentImage + 1} of {images.length}</p>
        </div>
      </div>

      {/* Task 8: Like Button */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Task 8: Like System</h2>
        <div className="text-center space-y-4">
          <p className="text-2xl">❤️ {likes} likes</p>
          <button 
            onClick={() => {
              if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
              } else {
                setLikes(likes + 1);
                setIsLiked(true);
              }
            }}
            className={`px-6 py-3 rounded font-semibold ${
              isLiked 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {isLiked ? '💔 Unlike' : '❤️ Like'}
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default Tasks;