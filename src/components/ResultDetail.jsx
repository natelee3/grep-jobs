import DateFunction from "./DateFunction";
import { useParams, Redirect } from 'react-router-dom';

const ResultDetail = ({searchResults}) => {
    const { listingId } = useParams();

    let result = searchResults.find((listing => {
        if (listing.id == listingId) {
            return listing;
        } else {
            return console.log('Details not found')
        }
    }))
    
    if (!!result) { 
        const formatDate = result.date_posted.slice(0,10).replace(/-/g, ",")

        return (
            <div className="content">
                <h1>{result.role}</h1>
                <h5>{result.company_name}</h5>
                <DateFunction formatDate={formatDate}/>
            </div>
        )
    } else { 
        return (
        <h1>Sorry!!</h1>
        )   
    }
};

export default ResultDetail;