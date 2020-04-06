import React from 'react'
import styled from 'styled-components'


const StyledInput = styled.input.attrs({ type: 'text' })`
    padding: .5rem 1rem ;
    border: 1px solid #d3d3d3;
    font-size: 16px;
    font-weight: 100;
    color: #222;
    outline: none;
`

export const Input = ({ value, onChange, type, name }) => {
    return (
        <StyledInput
            typ={type}
            value={value}
            onChange={onChange}
            name={name}
        />
    )
}