import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../appRedux/actions/userAction'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

//   const redirect = location.search ? location.search.split('=')[1] : '/'
 
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitUserone = (e) => {
    e.preventDefault()
    setEmail("user1")
    setPassword("user1")
  }

  const submitUsertwo = (e) => {
    e.preventDefault()
    setEmail("user2")
    setPassword("user2")
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Button onClick={submitUserone} type='submit' variant='primary'>
       USER One
        </Button>
        <Button onClick={submitUsertwo} type='submit' variant='primary'>
       USER Two
        </Button>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form  onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

    <hr/>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
         
        
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen