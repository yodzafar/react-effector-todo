import React, { useState } from 'react'
import { useStore } from 'effector-react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { todos, editTodo } from '../../../../effector/todo'
import { Input } from '../../atom/Input'
import { Checkbox } from '../../atom/Checkbox'
import { Button } from '../../atom/Button'

const TodoDetailWrapper = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    min-width: 500px;
    padding: 15px; 

    button {
        font-size: 16px;
        text-transform: uppercase
    }
`

const InputFiled = styled.div`
    margin-bottom: 1rem;
    display:flex;
    flex-direction: column;
`

export const TodoDetail = () => {
    const history = useHistory()
    const { id } = useParams()
    const $todos = useStore(todos)
    let todo = Object.assign({}, $todos.filter(item => item.id === Number(id))[0])

    const [_todo, setTodoValues] = useState({
        value: todo.text,
        completed: todo.completed,
        description: todo.description || ''
    })
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        if (e.target.name !== 'completed') {
            setTodoValues({ ..._todo, [e.target.name]: e.target.value })
        } else {
            setTodoValues({ ..._todo, completed: !_todo.completed })
        }
    }

    const handleUpdate = () => {
        const { value, description, completed } = _todo

        if (value.length > 3 && description.length > 3) {
            const payload = {
                id: todo.id,
                text: value,
                description: description,
                completed: completed
            }
            editTodo(payload)
            history.push('/')
        } else {
            setError('Fields must be filled')
        }
    }

    return (
        <TodoDetailWrapper>
            {
                error && <span>{error}</span>
            }

            <h1>Edit {todo.text}</h1>

            <InputFiled>
                <Input
                    type="text"
                    name='value'
                    value={_todo.value}
                    onChange={handleChange}
                />
            </InputFiled>
            <InputFiled>
                <div>
                    <Checkbox
                        type="checkbox"
                        name="completed"
                        value={_todo.completed}
                        checked={_todo.completed}
                        onChange={handleChange}
                    />
                Completed
            </div>

            </InputFiled>
            <InputFiled>
                <textarea
                    rows='5'
                    name='description'
                    value={_todo.description}
                    onChange={handleChange}
                />
            </InputFiled>
            <Button
                onClick={handleUpdate}
                bg='red'
                color='white'
                isActive={true}
            >
                save
            </Button>
        </TodoDetailWrapper>
    )
}