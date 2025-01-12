import React from 'react'

const Tabs = (props) => {
    const { todos, selectedTab, setselectedTab } = props
    const tabs = ['All', 'Active', 'Completed']



    return (
        <nav className="tab-container">
            {tabs.map((tab, index) => {
                const numOfTasks = tab === 'All' ? todos.length : 
                                   tab === 'Active' ? todos.filter((todo) => todo.completed === false).length : 
                                todos.filter((todo) => todo.completed === true).length


                return (
                    <button onClick={() => setselectedTab(tab)} key={index} className={"tab-button " + (tab == selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab} <span>({numOfTasks}) </span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}

export default Tabs