import DateFunction from './DateFunction';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import './Search.css'

const SavedResult = (props) => {
    const { id, job_id, user_sub, role, company_name, location, logo, date_posted } = props.listing;
    const formatDate = date_posted.slice(0,10).replace(/-/g, ",")

    const _deleteJob = () => {
        console.log('Stuff to delete', id, user_sub)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id, 
                user_sub: user_sub
                }
            )
        };
        console.log(requestOptions)
        fetch('http://localhost:3333/jobs/delete', requestOptions)
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
                        <Link to={`dashboard/${job_id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                            <Button variant="danger" onClick={()=> _deleteJob()}>Delete</Button>
                    </Card.Body>
                </Col>
            </div>    
        </Card>
       
            
    )
}   

export default SavedResult;

