import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components';

import { Button } from '../../atom/Button'
import { VISIBILITY_FILTERS } from '../../../../constants'
import { filter, applyFilter } from '../../../../effector/todo'

const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 10px;
    padding: 15px;
`

export const TodoFilter = () => {
    const $filter = useStore(filter)
    return (
        <FilterWrapper>
            {Object.keys(VISIBILITY_FILTERS).map(key => {
                const currentFilter = VISIBILITY_FILTERS[key]
                const isActive = $filter === currentFilter
                return (
                    <Button
                        isActive={isActive}
                        key={key}
                        onClick={() => applyFilter(currentFilter)}
                        color='white'
                        bg='DodgerBlue'
                    >
                        {currentFilter}
                    </Button>
                )
            })}
        </FilterWrapper>
    )
}