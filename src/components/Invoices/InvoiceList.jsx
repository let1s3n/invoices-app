import React,{useState,useEffect} from 'react'
import Invoice from './Invoice.jsx'
import './InvoiceList.scss'
import {Row} from 'react-bootstrap'

const InvoiceList = ({data}) => {

  /* const [invoices,setInvoices] = useState([{
    title:'invoice 1',
    amount:1000
  },{
    title:'invoice 2',
    amount:2000
  }]); */

  useEffect(() => {
    console.log(data);
  }, [])

  return (
    <Row className="invoiceList-container gx-0">
      {data.map(invoice=>{
        return <Invoice id={invoice.id} client={invoice.clientName}/>
      })}
    </Row>
  )
}

export default InvoiceList
