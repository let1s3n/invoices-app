import React from 'react'
import {
  useParams
} from "react-router-dom";

const InvoiceDetailHeader = ({data}) => {
  let { invoiceId } = useParams();
  return (
    <div>
      <h1>Cabecera del detalle del invoice {invoiceId}</h1>

      <ul>
        <li>{data.id}</li>
        <li>{data.client}</li>
        <li>{data.paymentDue}</li>
        <li>{data.total}</li>
      </ul>
    </div>
  )
}

export default InvoiceDetailHeader
