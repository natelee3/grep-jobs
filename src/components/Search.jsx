import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import SearchResult from './SearchResult';
import ResultDetail from './ResultDetail';
import './Search.css';
import Row from 'react-bootstrap/Row';

const JobSearch = (props) => {
    const [searchTerms, setSearchTerms] = useState('');
    const [location, setLocation] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [pastResults, setPastResults] = useState([])


    const _fetchResults = async () => {
        const url = `http://localhost:3333/proxy?url=https://findwork.dev/api/jobs?search=${searchTerms}&location=${location}`;
        await fetch(url)
            .then(response => response.json())
            .then(data => setSearchResults(data.results))
        
    };

    const _submitForm = (e) => {
        e.preventDefault();
        _fetchResults();
        setPastResults([...pastResults, searchTerms])
        setSearchTerms('')
        setLocation('');
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/search'>
                    <div className="content">
                        <h1>Search</h1>
                        <form onSubmit={_submitForm}>
                            <label>
                                <input 
                                    type="text"
                                    placeholder="🔎 Search all jobs"
                                    value={searchTerms}
                                    onChange={(e) => {
                                        setSearchTerms(e.target.value)
                                    }}
                                />
                            </label>
                            <label>
                                <input 
                                    type="text"
                                    placeholder="📍 Located anywhere"
                                    value={location}
                                    onChange={(e) => {
                                        setLocation(e.target.value)
                                    }}
                                />
                            </label>
                            <input 
                                className="btn btn-sm btn-primary" 
                                type="submit" 
                                value="Search" />
                        </form>
                        <hr />
                        {pastResults.length > 0 ? (
                            <p>Searching for keyword: <b>{pastResults[pastResults.length -1]}</b></p>
                        ) : null}

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
                                            date={listing.date_posted}
                                            listing={listing}
                                        />
                                    </Row>
                                    
                                ))
                                : (<> No results yet... </>)}
                        </div>
                    </div>
                </Route>
                <Route path='/search/:listingId'>
                    {searchResults.length > 0 ? (
                        <ResultDetail searchResults={searchResults}/>
                    ) : null}
                </Route>
            </Switch>
        </Router>
        
    )
};

export default JobSearch;