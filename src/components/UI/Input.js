import React from 'react';
import { Form } from 'react-bootstrap';
const Input = (props) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.inputType} placeholder={props.placeholder || ''} value={props.value} onChange={props.onChange}/>
            {props.msg && <Form.Text className="text-muted">
                {props.msg}
            </Form.Text>}
        </Form.Group>
    );
}

export default Input;
