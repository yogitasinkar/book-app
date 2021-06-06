import React from 'react'
import MyBook from './components/MyBook';
import { Container } from 'react-bootstrap';
import './App.css'

const App = () => {
  return (
    <Container fluid>
      <h1 className='text-center'>Demo Book</h1>
      <MyBook/>
    </Container>
  )
}

export default App
