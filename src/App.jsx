import React,{useState,useEffect} from 'react'
import './scss/app.scss'
import SideBar from './components/SideBar/SideBar.jsx'
import InvoiceList from './components/Invoices/InvoiceList.jsx'
import InvoiceHeader from './components/Invoices/InvoiceListHeader.jsx'
import { Row, Col, Container } from 'react-bootstrap'


const App = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{
      setData(await fetch('http://localhost:3000/src/data/data.json').then(res=>res.json()));
    };
    
    fetchData();
  }, [])

  return (
    <Container fluid className="px-0">
      <Row className="border border-primary gx-0">
        <Col sm={12} lg="auto">
          <SideBar />
        </Col>
        <Col className="border border-danger">
          <Row className="gx-0">
            <Row className="justify-content-center">
              <InvoiceHeader data={data}/>
            </Row>
            <Row className="justify-content-center">
              <InvoiceList data={data}/>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
