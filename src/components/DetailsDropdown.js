import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function DetailsDropdown(props) {
    return (
        <div>
            <Container>
                <Form style={{ padding: "0px 25px 0px 25px", marginTop: "15px" }}>
                    <Form.Group>
                        <Row>
                            <Col sm={3} style={{ padding: "7px 15px" }}>
                                <Form.Label style={{ float: "right", margin: "0px" }}>{props.title}&nbsp;&nbsp;</Form.Label>
                            </Col>
                            <Col sm={9} style={{ padding: "0px 15px 0px 15px" }}>
                                <Form.Group as="select" style={{ width: "100%", padding: "6px 12px" }}>
                                    <option value={null}>Please Select Your Age</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>


        </div>
    )
}

export default DetailsDropdown