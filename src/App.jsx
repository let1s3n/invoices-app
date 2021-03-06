import React, { useState, useEffect } from 'react'
import './scss/app.scss'
import SideBar from './components/SideBar/SideBar.jsx'
import InvoiceList from './components/Invoices/InvoiceList.jsx'
import InvoiceHeader from './components/Invoices/InvoiceListHeader.jsx'
import InvoiceDetailHeader from './components/Invoices/Detail/InvoiceDetailHeader.jsx'
import InvoiceDetailBody from './components/Invoices/Detail/InvoiceDetailBody.jsx'
import { Row, Col, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const App = () => {

  const [data, setData] = useState([]);
  const [details,setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetch('http://localhost:3000/src/data/data.json').then(res => res.json()));

    };

    fetchData();


  }, [])

  const handleDetails = data => {
    console.log(data);
    setDetails(data);
  }

  /* const handleDetailsChange = data => {
    console.log(data);
    setDetails(data);
  } */

  return (
    <Container fluid className="custom-container px-0">
      <Row className="gx-0">
        <Col sm={12} lg="auto">
          <SideBar />
        </Col>
        <Col>
          <Row className="gx-0 justify-content-center" style={{ paddingLeft: 24, paddingRight: 24 }}>

            <Router>
              <Row className="gx-0 justify-content-center">
                <Switch>

                  <Route exact path="/">
                    <InvoiceHeader data={data} />
                  </Route>
                  <Route exact path="/invoice/:invoiceId" children={<InvoiceDetailHeader data={details}/>} />


                </Switch>
              </Row>
              <Row className="gx-0 justify-content-center">
                <Switch>
                  <Route exact path="/">
                    <InvoiceList data={data} handler={handleDetails} />
                  </Route>
                  <Route exact path="/invoice/:invoiceId" children={<InvoiceDetailBody data={details}/>} />



                </Switch>
              </Row>

            </Router>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}


export default App
