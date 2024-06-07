import React, { useState } from 'react';
import { fetchRandomNumbers } from '../services/api';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RandomNumbers = () => {
    const [numbers, setNumbers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFetchRandomNumbers = async () => {
        setLoading(true);
        try {
            const data = await fetchRandomNumbers();
            setNumbers(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return(
        <Container>        
        <Row>
          <Col xs lg="2" className="text-left left-column">
            <Button variant="primary" onClick={handleFetchRandomNumbers} disabled={loading}>{loading ? 'Loading...' : 'Get'}</Button><br/>
            <Button variant="success">Post</Button><br/>
            <Button variant="warning">Put</Button><br/>
            <Button variant="danger">Delete</Button><br/>
          </Col>
          <Col><h5 style={{textAlign:'center'}}>Random Numbers</h5>
          <textarea 
                rows="10"
                cols="50"
                value={numbers.join(', ')}
                readOnly
            />
          </Col>
        </Row>
        </Container>
    );
};

export default RandomNumbers;