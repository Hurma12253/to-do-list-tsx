import React from 'react'
import {ITodo} from './Interfaces'
import Todoitem from './Todoitem'

interface TodolistProps{
    todos: ITodo[]
    removeTodo: (id: number) => void
    setAchieved: (id: number) => void
}

const Todolist: React.FC<TodolistProps> = props =>{
    return (
        <div>
            {props.todos.map(todo=>{
                return <Todoitem setAchieved={props.setAchieved} todo={todo} removeTodo={props.removeTodo} key={todo.id}/>
            })}
        </div>
    )
}

export default Todolist
