import React from 'react';
import './App.css';

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import perfil from './img/perfil.jpg';

import { 
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Button
} from 'reactstrap';

function Home() {
    return (
      <>
        <div className="container-fluid mt-5 ">
          <Row className="justify-content-md-center h-100 ">
            <Col sm="8" className="col mx-auto">
              <Card className="card card-block">
                <CardBody>
                 
                  <Media>
                    <Media left href="#" >
                      <Media object src={perfil} className="img-home mr-3" alt="author identifier picture" />
                    </Media>
                    <Media body>
                      <Media heading> <b>Paulo Igor Moraes</b> </Media>
                      Formado em Engenharia da Computação pelo UniNorte Laureate. Atuou 
                      em projetos de iniciação científica utilizando técnicas de mineração de dados (textuais) e 
                      modelagem de aplicações para dispositivos móveis. Dispõe de experiências em desenvolvimento de <i>software (web/mobile)</i> para indústria, mercado e academia, além de possuir <i>know-how</i> nas linguagens de programação: <i>Javascript (NodeJS)</i> e <i>Python</i>. Atualmente trabalha como Analista Programador em projetos de P&D para a Indústria 4.0.
                    </Media>
                  </Media>

                  <Row className="text-center font-weight-bold">
                    <div className="col col-sm-2 col-hr">
                      <hr className="red" />
                    </div>
                    <div className="col col-sm-2 col-hr">
                        <hr className="orange" />
                    </div>
                    <div className="col col-sm-2 col-hr">
                        <hr className="yellow" />
                    </div>
                    <div className="col col-sm-2 col-hr">
                        <hr className="green" />
                    </div>
                    <div className="col col-sm-2 col-hr">
                        <hr className="blue" />
                    </div>
                    <div className="col col-sm-2 col-hr">
                        <hr className="purple" />
                    </div>
                  </Row>

                  <Row className="text-center font-weight-bold">
                    <Col sm="4" className="text-left col">
                      <Button color="dark" className="btn btn-sm">
                        <a className="no-line" href="/elections">
                          ACESSAR ESTUDO
                        </a>
                      </Button>
                    </Col>
                    <Col sm="4" className="col">
                      <a href="https://www.linkedin.com/in/pauloigormoraes/" className="no-line" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{ color: "#292929", className: "global-class-name" }}>
                          <div>
                            <FaLinkedin /> <b className="link-dark">LinkedIn</b>
                          </div>
                        </IconContext.Provider>
                      </a>
                    </Col>
                    <Col sm="4" className="col">
                      <a href="https://www.instagram.com/pauloigorms/" className="no-line" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{ color: "#292929", className: "global-class-name" }}>
                          <div>
                            <FaInstagram /> <b className="link-dark">Instagram</b>
                          </div>
                        </IconContext.Provider>
                      </a>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
}

export default Home;