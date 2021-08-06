import DateFunction from "./DateFunction";
import { useParams, useHistory } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import DOMPurify from 'dompurify';
import './ResultDetail.css';

const ResultDetail = ({searchResults}) => {
    const { listingId } = useParams();
    const history = useHistory();

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      };

    const _fetchAndFilter = async (listing) => {
        console.log('Running fetchFilter function')
        let url = `http://localhost:3333/proxy?url=https://findwork.dev/api/jobs?search=${listing.role}`;
        const singleListing = await fetch(url).then(response => response.json());
        console.log(singleListing.results)
        if (singleListing.results.length > 1) {
            const found = singleListing.results.find(job => (job.id === listing.job_id));
            console.log('Returning single listing from find', found)
            return found;
        } else {
            console.log('Returning single result')
            return singleListing.results;
        }
    };

    let result = searchResults.find((listing => {
        if (listing.id === parseInt(listingId)) {
            console.log('Found id')
            return listing;

        } else if (listing.job_id === listingId) {
            console.log('Found job id', listing.job_id, listingId)
            return _fetchAndFilter(listing);

        } else {
            return console.log('Details not found')
        }
    }))

    console.log('RESULT after conditional', result)
    
    if (!!result) { 
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
                    <div dangerouslySetInnerHTML={sanitizeData()}/>

                    
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
        <>
            <h1>No details for this result</h1>
            <div>
                <button type="button" className="btn btn-primary" onClick={()=> {history.goBack()}}>Back</button>
            </div>
        </>
        )   
    }
};

export default ResultDetail;