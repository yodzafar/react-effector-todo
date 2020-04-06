import React, { useState } from 'react'
import styled from 'styled-components'

import { Input } from '../../atom/Input'
import { Button } from '../../atom/Button'
import { addTodo } from '../../../../effector/todo'

const AddWrapper = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 15px;
   display: grid;
   grid-template-columns: 1fr 100px;

   button {
       font-size: 16px;
       text-transform: uppercase;
   }
`

export const TodoAdd = () => {
    const [value, setValue] = useState('')
    const addHandler = value => {
        addTodo(value)
        setValue('')
    }
    return (
        <AddWrapper>
            <Input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                onClick={() => addHandler(value)}
                color='white'
                isActive={true}
                bg='CornflowerBlue'
            >
                add
            </Button>
        </AddWrapper>
    )
}