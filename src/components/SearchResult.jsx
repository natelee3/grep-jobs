import DateFunction from './DateFunction';
import ReactImageFallback from 'react-image-fallback';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import './Search.css'

const SearchResult = (props) => {
    const [favorite, setFavorite] = useState(false)
    const { user, isAuthenticated } = useAuth0();
    const { id, role, company_name, location, logo, date_posted } = props.listing;
    const formatDate = date_posted.slice(0,10).replace(/-/g, ",")

    const _saveJob = () => {
        console.log(id, user.sub, company_name, role, logo, location, date_posted)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id, 
                user_sub: user.sub.slice(6), 
                company_name: company_name, 
                role: role, 
                logo: logo, 
                location: location, 
                date_posted: date_posted
                }
            )
        };
        console.log(requestOptions)
        fetch('http://localhost:3333/jobs/add', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        setFavorite(true);
    };
    
    return (
       
        <Card key={id} style={{ width: '90vw' }}>
            <div className="row">
                <Col className="d-flex align-self-center justify-content-center">
                    <div className="img-wrapper d-block">
                    <ReactImageFallback
                                        src={logo} 
                                        fallbackImage="/logo192.png"
                                        className="card-img" 
                        />                    </div>
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
                        <Link to={`/${id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                        {!!isAuthenticated && (
                            !!favorite ? (
                                <Button variant="success">Saved!</Button>
                            ) : (
                                <Button variant="secondary" onClick={()=> _saveJob()}>Save</Button>
                            )
                        )}
                    </Card.Body>
                </Col>
            </div>    
        </Card>
       
            
    )
}   

export default SearchResult;

