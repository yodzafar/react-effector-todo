import React from 'react'
import { TodoAdd } from '../../molecules/todo-add'
import { TodoList } from '../../molecules/todo-list'
import styled from 'styled-components'


const TodoWrapper = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    min-width: 500px;
`
export const Todo = () => {
    return (
        <TodoWrapper>
            <TodoAdd />
            <TodoList />
        </TodoWrapper>
    )
}