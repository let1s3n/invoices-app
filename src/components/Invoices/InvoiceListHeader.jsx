import React from 'react'
import './InvoiceListHeader.scss'
const InvoiceHeader = ({ data }) => {
  return (
    <div className="invoiceList-header">
      <div>
        <h1>Invoices</h1>
        <h3 className="h3--small">{`There are ${data.length} total invoices`}</h3>
      </div>

      <div>
        asdasds
      </div>
    </div>
  )
}

export default InvoiceHeader
