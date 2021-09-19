import DateFunction from './DateFunction';
import Modal from 'react-bootstrap/Modal';
import ReactImageFallback from 'react-image-fallback';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import './Search.css'

const SavedResult = (props) => {
    const { id, job_id, role, company_name, location, logo, date_posted, applied } = props.listing;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const deleteAndClose = () => {
        props.deleteJob(id);
        handleClose();
    };

    const changeApplied = () => {
        props.updateJob(id, applied)
    }
    
    return (
        <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    Are you sure you want to delete this saved job?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="danger" onClick={deleteAndClose}>Delete Job</Button>
            </Modal.Footer>
        </Modal>

        <Card key={id} style={{ width: '90vw' }}>
            <div className="row justify-content-center">
                <Col xs={3} className="d-flex align-self-center justify-content-center">
                    <div className="img-wrapper d-block">
                        <ReactImageFallback
                                        src={logo} 
                                        fallbackImage="/logo192.png"
                                        className="card-img" 
                        />
                    </div>
                </Col>
                <Col xs={6}>
                    <Card.Body className="align-left">
                        <Card.Title><b>{role}</b></Card.Title>
                        <Card.Text>
                            {company_name} - {!!location ? (
                                <span>{location}</span>
                            ) : (<span>No office location</span>) }
                            <div>
                                <DateFunction date_posted={date_posted}/>
                            </div>
                        </Card.Text>
                        <Link to={`dashboard/${job_id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                            <Button variant="danger" onClick={()=> handleOpen()}>Delete</Button>
                    </Card.Body>
                </Col>
                <Col xs={3}>
                    <form>
                        <label className="applied-checkbox"> Applied
                            <input type="checkbox" checked={applied} onChange={changeApplied} />
                        </label>
                    </form>
                </Col>
            </div>    
        </Card>

        
        </>
       
            
    )
}   

export default SavedResult;

