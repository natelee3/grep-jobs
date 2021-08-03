import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import './Search.css'

const SearchResult = (props) => {
    const { key, role, company_name, url, location, logo } = props;

    return (
        <a href={url}>
            <Card key={key} style={{ width: '70vw' }}>
                <div className="row">
                    <Col className="d-flex">
                        <Card.Img src={logo} className="card-img" />
                    </Col>
                    <Col xs={9}>
                        <Card.Body className="align-left">
                            <Card.Title><b>{role}</b></Card.Title>
                            <Card.Text>
                                <p>{company_name} - {location}</p>
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Col>
                </div>    
            </Card>
        </a>
            
    )
}   

export default SearchResult;

