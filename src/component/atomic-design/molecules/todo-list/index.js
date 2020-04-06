import React from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { todos } from '../../../../effector/todo'

import { TodoFilter } from '../todo-filter'
import { TodoListItem } from '../../molecules/todo-list-item'

const List = styled.ul`
    list-style: none;
    padding: 15px;
    margin: 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
`

export const TodoList = () => {
    const $todos = useStore(todos)
    return (
        <>
            <List>
                {$todos && $todos.map((todo) => (
                    <TodoListItem todo={todo} key={todo.id} />
                ))}
            </List>
            <TodoFilter />
        </>
    )
}