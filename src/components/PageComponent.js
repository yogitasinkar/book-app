import React from 'react';
import {Row, Col} from 'react-bootstrap';

const PageComponent = () => {
    return (
        <Row className='h-100'>
            <Col className='spine left'>
                <Row >Left Page</Row>
                <Row className='px-3'>
                    <p className='auto'>Page Number</p>
                </Row>
            </Col>
            <Col className='spine'>
                <Row className='px-3'>Right Page</Row>
                <Row className='px-3'>
                    <p className='auto'>Page Number + 1</p>
                </Row>
            </Col>
        </Row>
    )
}

export default PageComponent
