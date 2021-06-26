import React from 'react'
import './Invoice.scss'
import {Row,Col} from 'react-bootstrap'
const Invoice = ({ id, client }) => {
  return (
    <Row className="invoice mb-3 gx-0">
      <Col>
        <h1>{id}</h1>
      </Col>
      <Col>
        <h1>{client}</h1>
      </Col>
    </Row>
  )
}

export default Invoice
