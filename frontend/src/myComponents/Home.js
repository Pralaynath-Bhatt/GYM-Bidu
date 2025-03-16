import React from 'react'
import HomeCard from "./HomeCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
  return (
    <div>
      <h1>Welcome to a complete ditness tracker</h1>
      <p>Here we have designed plans for you to get your fitness goals</p>
      <Container>
      <Row>
        <Col><HomeCard/></Col>
        <Col><HomeCard/></Col>
      </Row>
      <Row>
        <Col><HomeCard/></Col>
        <Col><HomeCard/></Col>
      </Row>
    </Container>
    </div>
  )
}
