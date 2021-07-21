import React from 'react'
import {
  useParams
} from "react-router-dom";
const InvoiceDetailBody = () => {
  let {invoiceId} = useParams();
  return (
    <h1>Cuerpo del detalle del invoice {invoiceId}</h1>
  )
}

export default InvoiceDetailBody
