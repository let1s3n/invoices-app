import React from 'react'
import './Invoice.scss'
import { Row, Col, Button } from 'react-bootstrap'
import { MdKeyboardArrowRight } from "react-icons/md"
import {
  Link
} from "react-router-dom";

const Invoice = ({ id, client, paymentDue, total }) => {
  

  return (
    <Row className="invoice mb-3 gx-0 align-items-center justify-content-around">
      <Col className="text-center">
        <h3 className="h3--small mb-0">{`#${id}`}</h3>
      </Col>
      <Col className="text-center">
        <h3 className="h3--small h3--light mb-0">{client}</h3>
      </Col>
      <Col className="text-center">
        <h3 className="h3--small h3--light mb-0">{paymentDue}</h3>
      </Col>
      <Col className="text-center">
        <h3 className="h3--big mb-0">{total}</h3>
      </Col>
      <Col className="text-center">
        <Button>asdasd</Button>
        <Link to={`/invoice/${id}`}><MdKeyboardArrowRight style={{ cursor: "pointer" }}/></Link>
      </Col>
    </Row>

    
  )
}

export default Invoice
