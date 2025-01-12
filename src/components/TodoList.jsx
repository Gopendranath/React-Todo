import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const { todos, selectedTab, handleToggleTodo, handleDeleteTodo } = props;
    // console.log(todos)

    // const tab = "Active"
    const filteredTodos = selectedTab === 'All' ? todos :
        selectedTab === 'Active' ? todos.filter((todo) => todo.completed === false) :
            todos.filter((todo) => todo.completed === true)

    return (
        <>
            {filteredTodos.map((todo, todoindex) => {
                return (
                    <TodoCard key={todoindex}
                        todoindex={todoindex} 
                        filteredTodos={filteredTodos} 
                        {...props} />
                )
            })}

        </>
    )
}

export default TodoList