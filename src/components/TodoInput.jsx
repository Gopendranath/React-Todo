import React from 'react'

const TodoInput = (props) => {
    const { handleAddTodo } = props
    const [input, setInput] = React.useState('')

    return (
        <div className='input-container'>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Add todo...' />
            <button onClick={() => {if (!input) { return } 
                handleAddTodo(input)
                setInput('')}}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}

export default TodoInput