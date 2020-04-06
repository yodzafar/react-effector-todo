import React from 'react'
import { Link } from 'react-router-dom'
import { toggled, deleteTodo } from '../../../../effector/todo'
import styled from 'styled-components'
import { Button } from '../../atom/Button'
import { Checkbox } from '../../atom/Checkbox'

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 10px 0;
    border: 1px solid rgba(0,0,0,.05);
    background-color: ${(props => props.completed ? '#cceeff' : '#fff')};

    button {
        margin-left: auto;
    }
`

const StyledLink = styled(Link)`
    font-size: 16px;
    color: #333;
    text-decoration: none;
`

export const TodoListItem = ({ todo }) => {
    return (
        <ListItem completed={todo.completed}>
            <Checkbox
                type="checkbox"
                value={todo.completed}
                onChange={() => toggled(todo.id)}
                checked={todo.completed}
            />
            <StyledLink to={`/${todo.id}`}>{todo.text}</StyledLink>

            <Button
                onClick={() => deleteTodo(todo.id)}
                color='white'
                bg='FireBrick'
                isActive={true}
            >
                &#10006;
            </Button>
        </ListItem>
    )
}