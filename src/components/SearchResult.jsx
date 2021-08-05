import DateFunction from './DateFunction';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import './Search.css'

const SearchResult = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const { id, role, company_name, location, logo, date_posted } = props.listing;
    const formatDate = date_posted.slice(0,10).replace(/-/g, ",")

    const _saveJob = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, 'user_sub': user.sub, company_name, role, logo, location, date_posted}
            )
        };
        fetch('http://localhost:3333/jobs/add', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    };
    
    return (
       
        <Card key={id} style={{ width: '90vw' }}>
            <div className="row">
                <Col className="d-flex align-self-center">
                    <div className="img-wrapper d-block">
                        {!!logo ? (<Card.Img src={logo} className="card-img" />) : (<p>No image found</p>)}
                    </div>
                </Col>
                <Col xs={9}>
                    <Card.Body className="align-left">
                        <Card.Title><b>{role}</b></Card.Title>
                        <Card.Text>
                            <p>{company_name} - {!!location ? (
                                <span>{location}</span>
                            ) : (<span>No office location</span>) }</p>
                            <DateFunction formatDate={formatDate}/>
                        </Card.Text>
                        <Link to={`search/${id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                        {!!isAuthenticated && (
                            <Button variant="secondary" onClick={()=> _saveJob()}>Save</Button>
                        )}
                    </Card.Body>
                </Col>
            </div>    
        </Card>
       
            
    )
}   

export default SearchResult;

