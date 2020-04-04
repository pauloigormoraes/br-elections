import React from 'react';
import './App.css';

import Menu from './components/Menu'
import Footer from './components/Footer'
import MenuSection from './sections/MenuSection'
import FirstSection from './sections/FirstSection'
import SecondSection from './sections/SecondSection'

import { 
  Row,
  Col
} from 'reactstrap';

function Elections() {
  return (
    <> 
         
      <div className="container-fluid">
        
        <Row className="justify-content-center">          
          <Col sm="10">
            <Menu />
          </Col>
          <MenuSection />
        </Row>

        <Row className="justify-content-end">
          <FirstSection />
        </Row>
      
        <Row className="justify-content-start">
          <SecondSection />
        </Row>

      </div>

      
      <Footer />
    </>
  );
}

export default Elections;
