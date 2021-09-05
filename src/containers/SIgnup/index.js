import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input';
const Signup = () => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '5rem' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input placeholder='Enter First Name' type='text' label='First Name' />
                                </Col>
                                <Col md={6}>
                                    <Input placeholder='Enter Last Name' type='text' label='Last Name' />

                                </Col>
                            </Row>
                            <Input placeholder='Enter Email' type='email' label='Email' msg="we'll never share your email with anyone else." />
                            <Input placeholder='Enter Password' type='password' label='Password' />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Signup;
