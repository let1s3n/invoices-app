import React, { useState, useEffect } from 'react'
import './InvoiceListHeader.scss'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { IoMdAddCircle } from "react-icons/io";

const InvoiceHeader = ({ data }) => {

  function useWindowSize() {

    const [screenWidth, setScreenWidth] = useState(screen.width);

    useEffect(() => {
      function updateSize() {

        setScreenWidth(screen.width);

      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);

    }, [data]);

    return screenWidth;
  }


  return (
    <div className="invoiceList-header">
      <div>
        <h1 className="h1">Invoices</h1>
        <h3 className="h3--small">{useWindowSize() < 768 ? `${data.length} invoices` : `There are ${data.length} total invoices`}</h3>
      </div>

      <div className="d-flex">
        <DropdownButton id="dropdown-basic-button" title="filter by status" variant="light">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <Button className="btn1 position-relative border-0">
          <IoMdAddCircle className="position-absolute top-50 start-0 translate-middle-y custom-fs d-sm-none" style={{width:37,height:37}}/>
          <IoMdAddCircle className="position-absolute top-50 start-0 translate-middle-y custom-fs .d-none .d-sm-block" style={{width:37,height:37}}/>
          
          <span className="position-absolute top-50 end-0 translate-middle-y fw-bold" style={{paddingRight:14}} >{useWindowSize() < 768 ? "New" : "New Invoice"}</span>
        </Button>
      </div>
    </div>
  )
}

export default InvoiceHeader
