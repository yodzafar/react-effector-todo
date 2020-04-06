import React from 'react';
import { Routes } from './routes'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AppWrapper = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Container>
          <Routes />
        </Container>
      </AppWrapper >
    </Router >
  )
}

export default App;
