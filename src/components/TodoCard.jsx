import React from 'react'

const TodoCard = (props) => {
    const { todoindex, filteredTodos, handleToggleTodo, handleDeleteTodo } = props
    const todo = filteredTodos[todoindex]
    // console.log(todo, todoindex, 'from todo card')

  return (
    <div className='card todo-item'>
        <p>{todo.title}</p>
        <div className="todo-buttons">
            <button onClick={() => handleToggleTodo(todo.id)} disabled={todo.completed}>
                <h6>Done</h6>
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>
                <h6>Delete</h6>
            </button>
        </div>
    </div>
  )
}

export default TodoCard