import React from 'react'
import {
  useParams
} from "react-router-dom";
const InvoiceDetailHeader = () => {
  let {invoiceId} = useParams();
  return (
    <h1>Cabecera del detalle del invoice {invoiceId}</h1>
  )
}

export default InvoiceDetailHeader
