import React from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import todosData from './todos.json'

const App = () => {
  // const todos = [
  //   { id: 1, title: 'Todo 1', completed: false },
  //   { id: 2, title: 'Todo 2', completed: true },
  //   { id: 3, title: 'Todo 3', completed: false },
  //   { id: 4, title: 'Todo 4', completed: true },
  // ]

  // console.log(todos)

  const [todos, setTodos] = React.useState([])
  const [selectedTab, setselectedTab] = React.useState('Active')

  React.useEffect(() => {
    if (!localStorage || !localStorage.getItem('todos')) {
      return
    }

    let db = JSON.parse(localStorage.getItem('todos'))
    setTodos(db.todos)
  }, [])

  const handleSaveTodos = (currentTodos) => {
    localStorage.setItem('todos', JSON.stringify({todos: currentTodos}))
  }

  const handleAddTodo = (newTodo) => {
    const newTask = { 
      id: todos.length + 1, 
      title: newTodo, 
      completed: false 
    }
    setTodos([...todos, newTask])
    handleSaveTodos([...todos, newTask])
  }

  const handleToggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    handleSaveTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    handleSaveTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setselectedTab={setselectedTab} />
      <TodoList handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App