import React from 'react'
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const InvoiceDetailBody = ({ data }) => {
  let { invoiceId } = useParams();
  return (
    <div>
      <h1>Cuerpo del detalle del invoice {invoiceId}</h1>
      <ul>
        <li>{data.id}</li>
        <li>{data.client}</li>
        <li>{data.paymentDue}</li>
        <li>{data.total}</li>
      </ul>
    </div>
  )
}

export default InvoiceDetailBody
