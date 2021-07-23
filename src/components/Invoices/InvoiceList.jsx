import React,{useState,useEffect} from 'react'
import Invoice from './Invoice.jsx'
import './InvoiceList.scss'
import {Row} from 'react-bootstrap'

const InvoiceList = ({data,handler}) => {

  return (
    <Row className="invoiceList-container gx-0">
      {data.map(invoice=>{
        return <Invoice key={invoice.id} id={invoice.id} client={invoice.clientName} paymentDue={invoice.paymentDue} total={invoice.total} handler={handler}/>
      })}
    </Row>
  )
}

export default InvoiceList
