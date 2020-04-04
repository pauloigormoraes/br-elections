import React from 'react';

import { Row, Col } from 'reactstrap';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

class Footer extends React.Component {
    constructor(props) {
        super();
    }
    render() {        
        return(
            <>
                <div className="container-fluid mb-5">
                    <Row className="justify-content-md-center">
                    <Col sm="10">
                        <hr className="hr-color"></hr>
                    </Col>
                    <Col sm="10" className="text-center">
                        <a href="https://www.instagram.com/pauloigorms/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        </a> &emsp;
                        <a href="https://www.facebook.com/pauloigorms" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                        </a> &emsp;
                        <a href="https://www.linkedin.com/in/pauloigormoraes/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                        </a> &emsp;
                        <a href="https://github.com/pauloigorms" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Footer;