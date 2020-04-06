import React from 'react'
import { TodoDetail } from '../../organisms/todo-detail'
import styled from 'styled-components'

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center
`

export const Detail = () => {
    return (
        <DetailWrapper>
            <TodoDetail />
        </DetailWrapper>
    )

}