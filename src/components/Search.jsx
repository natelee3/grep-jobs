import { useState } from 'react';
import SearchResult from './SearchResult';
import './Search.css';
import Row from 'react-bootstrap/Row';

const JobSearch = (props) => {
    const [searchTerms, setSearchTerms] = useState('');
    const [searchResults, setSearchResults] = useState([])


    const _fetchResults = () => {
        const key = 'Token 4c95d9d3623b7f3fe789864d2db137ffe9ac9391'
        const requestOptions = {
            method: 'GET',
            headers: {'Authorization': `${key}`}
        }
        const url = 'https://cors-anywhere.herokuapp.com/https://findwork.dev/api/jobs';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setSearchResults(data.results))
        
    };

    const _submitForm = (e) => {
        e.preventDefault();
        _fetchResults();
        setSearchTerms('');
    }

    return (
        <div className="content">
            <h1>Search</h1>
            <form onSubmit={_submitForm}>
                <label>
                    <input 
                        type="text"
                        placeholder="Search all jobs"
                        value={searchTerms}
                        onChange={(e) => {
                            setSearchTerms(e.target.value)
                        }}
                    />
                </label>
                <input 
                    className="btn btn-sm btn-primary" 
                    type="submit" 
                    value="Search" />
            </form>
            <hr />

            <div className="card-container container">
                {!!searchResults.length > 0 ? 
                    searchResults.map((listing, index) => (
                        <Row className="flex-left">
                            <SearchResult 
                                key={`${index}-${listing.company_name}`}
                                role={listing.role}
                                company_name={listing.company_name}
                                url={listing.url}
                                location={listing.location}
                                logo={listing.logo}
                            />
                        </Row>
                        
                    ))
                      : (<> No results yet... </>)}
            </div>
           
        </div>
    )
};

export default JobSearch;