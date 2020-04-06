import React from 'react'
import { Todo } from '../../organisms/todo'
import styled from 'styled-components'

const TodoWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Home = () => {
    return (
        <TodoWrapper>
            <Todo />
        </TodoWrapper>
    )
}