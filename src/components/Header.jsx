import React from 'react'

const Header = (props) => {
    const { todos } = props
    const todoLength = todos.length
    const isLengthPlural = todoLength != 1
    const todoOrTodos = isLengthPlural ? 'todos' : 'todo'


  return (
    <header>
        <h1 className='text-gradient'>Todo App | 
            <span> {todoLength} {todoOrTodos} to complete </span>
        </h1>
    </header>
  )
}

export default Header