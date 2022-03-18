import React from 'react'
import { Col, Row, Container, Image, Card } from "react-bootstrap";

function DLayout(props) {
    return (
        <Row>{props.cols.map((e, i) => { return (<Col style={{transition: '350ms', paddingBottom:'25px'}} key={`${props.dname}-${i}`} lg={e}>{props.features[i]}</Col>) })}</Row>
    )
}

export default DLayout