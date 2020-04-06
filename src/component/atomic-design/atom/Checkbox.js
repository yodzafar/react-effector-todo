import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: relative;
    margin-right: 20px;
    margin-left: 10px;

    &::after{
        content: '';
        position: absolute;
        display: block;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        border: 2px solid #85e3ff;
        z-index: 1;
        background-color: #fff;
        cursor: pointer;
    }

    &::before{
        content: '';
        position: absolute;
        display: block;
        z-index: 2;
        width: 10px;
        height: 10px;
        background-color: #85e3ff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: ${(props => props.checked ? '1' : '0')};
        cursor: pointer;
    }
`

export const Checkbox = ({ type, onChange, checked, value, name }) => {
    return (
        <StyledCheckbox
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            checked={checked}
        />
    )
}