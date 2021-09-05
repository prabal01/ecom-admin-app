import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout';

const HomePage = () => {
    return (
        <Layout>
            <Jumbotron className='text-center' style={{ margin: '5rem' }}>
                <h1>Welcome to Admin Dashboard</h1>
                <p>Fugiat amet consequat dolor velit amet duis eu nostrud eu proident laboris deserunt. Exercitation excepteur eiusmod nisi amet aliquip tempor laboris Lorem. Sit amet officia nostrud cupidatat incididunt. Officia exercitation in ea ipsum aute consectetur irure excepteur laborum quis ipsum.</p>
            </Jumbotron>
        </Layout>
    );
}

export default HomePage;

