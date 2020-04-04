import React from 'react';

import { 
    Row,
    Col,
    Card,
    CardHeader
} from 'reactstrap';

class SecondSection extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        
        return(
            <>
                <Col sm="1"></Col>

                <Col sm="5" className="mt-5 mb-5">                    
                    <Card className="card">
                        <CardHeader>
                            <Row className="mt-3 mb-3">
                                <Col sm="12" >
                                    <h4>
                                        Where does it come from?
                                    </h4>
                                    <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in...
                                    </p>
                                </Col>
                            </Row>
                        </CardHeader>
                    </Card>
                </Col>

                <Col sm="1"></Col>

            </>
        );
    }
}

export default SecondSection;