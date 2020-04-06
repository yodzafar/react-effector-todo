import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: 0;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
    padding: 6px 12px;
    opacity: ${(props) => props.active ? 1 : .7};
    outline: 0;
    cursor: pointer;
`

export const Button = ({ onClick, children, color, bg, isActive }) => {
    return (
        <StyledButton
            onClick={onClick}
            color={color}
            bg={bg}
            active={isActive !== undefined && isActive}
        >
            {children}
        </StyledButton>
    )
}