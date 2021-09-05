import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input';
const Signin = () => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop:'5rem'}}>
                    <Col md={{span:6, offset:3}}>
                <Form>
                <Input placeholder='Enter Email' type='email' label='Email' />
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

export default Signin;
