import React from 'react'
import { Col, Row, Container, Image, Form, ProgressBar } from "react-bootstrap";

function ProducRowatingSummary() {
  return (
    <><Container style={{borderStyle:'solid', width:'100%'}}>
      <Row>
        <Col lg={3}>5 star</Col>
        <Col lg={3}><ProgressBar now={50} /></Col>
        <Col lg={3}>50%</Col>
      </Row>
      <Row>
        <Col>4 star</Col>
        <Col><ProgressBar now={25} /></Col>
        <Col>25%</Col>
      </Row>
      <Row>
        <Col>3 star</Col>
        <Col><ProgressBar now={10} /></Col>
        <Col>10%</Col>
      </Row>
      <Row>
        <Col>2 star</Col>
        <Col><ProgressBar now={5} /></Col>
        <Col>5%</Col>
      </Row>
      <Row>
        <Col>1 star</Col>
        <Col><ProgressBar now={5} /></Col>
        <Col>5%</Col>
      </Row>

    </Container></>
  )
}

export default ProducRowatingSummary