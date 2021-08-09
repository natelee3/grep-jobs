import DateFunction from "./DateFunction";
import { useParams, useHistory } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import DOMPurify from 'dompurify';
import './ResultDetail.css';
import { useState, useEffect } from 'react';

const ResultDetail = ({searchResults, listings}) => {
    const [result, setResult] = useState(null);
    const { listingId } = useParams();
    const history = useHistory();

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      };

    const _fetchAndFilter = async (listing) => {
        let url = `http://localhost:3333/proxy?url=https://findwork.dev/api/jobs?search=${listing.role}`;
        const singleListing = await fetch(url).then(response => response.json());
        const found = singleListing.results.find(job => {
            return job.id === parseInt(listing.job_id)});
        return found;
    };

    useEffect(() => {
        (async () => {
            //Coming from Dashboard, listings object contains all saved jobs from database
            if (!!listings) {
                const dashboardListing = listings.find(listing => {
                    return listing.job_id === listingId;
                })
                console.log(dashboardListing)
                const response = await _fetchAndFilter(dashboardListing);
                setResult(response);
            }
            //Coming from Search, searchResults object contains all search results
            if (!!searchResults) {
                const searchListing = searchResults.find(listing => {
                    return listing.id === parseInt(listingId)
                })
                setResult(searchListing);
            }
        })()
    },[searchResults, listings, listingId])
    
    
    if (!!result) { 
        console.log(result)
        const formatDate = result.date_posted.slice(0,10).replace(/-/g, ",")
        const data = result.text
        const sanitizeData = () => ({
            __html: DOMPurify.sanitize(data)
        })

        return (
            <div className="content">
                <h1>{result.role}</h1>
                <h5>{result.company_name}</h5>
                <DateFunction formatDate={formatDate}/>
                <div>
                    <h5>About this job</h5>
                    <p>Job Type: 
                        {!!result.employment_type ? (
                            <b> {result.employment_type}</b>
                        ) : ( <b> Not specified</b>)}
                        </p>
                    <div>
                        <h5>Technologies:</h5> 
                        {!!result.keywords.length > 0 ? (
                            result.keywords.map((keyword, index) => (
                                <Badge style={{'background-color': 'grey'}} key={`${index}-${keyword}`}>{keyword}</Badge>
                            ))
                        ) : (<></>)}
                    </div>
                    <br/>
                    <h5>Job Description:</h5>
                    <div class="job-text" dangerouslySetInnerHTML={sanitizeData()}/>

                    
                </div> <br/>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={()=> openInNewTab(`${result.url}`)}>Apply</button>
                <button type="button" className="btn btn-primary" onClick={()=> {history.goBack()}}>Back</button>
            </div>
        )
    } else { 
        return (
        <div className="content">
            <h1>Loading details...</h1>
            <div>
                <button type="button" className="btn btn-primary" onClick={()=> {history.goBack()}}>Back</button>
            </div>
        </div>
        )   
    }
};

export default ResultDetail;