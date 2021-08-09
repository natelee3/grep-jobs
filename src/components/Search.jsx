import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import SearchResult from './SearchResult';
import ResultDetail from './ResultDetail';
import './Search.css';
import Row from 'react-bootstrap/Row';

const Search = (props) => {
    const [searchTerms, setSearchTerms] = useState('');
    const [location, setLocation] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [pastResults, setPastResults] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [remote, setRemote] = useState(false);


    const _fetchResults = async () => {
        setNoResults(false);
        const url = `http://localhost:3333/proxy?url=https://findwork.dev/api/jobs?search=${searchTerms}&location=${location}&remote=${remote}&sort_by=relevance`;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.count === 0) {setNoResults(true)}
                setSearchResults(data.results)
            })
        
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
                <Route exact path='/'>
                    <div className="content">
                        <h1>Search</h1>
                        <h4>Let us help you find your next position. Search by keyword and/or city to return active listings.</h4>
                        <form onSubmit={_submitForm}>
                            <label>
                                <input 
                                    type="text"
                                    placeholder="🔎 Search all jobs"
                                    data-testid="searchTerms"
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
                                    data-testid="locationText"
                                    value={location}
                                    onChange={(e) => {
                                        setLocation(e.target.value)
                                    }}
                                />
                            </label>
                            <label> 
                                    <input 
                                        type="checkbox"
                                        name="remote"
                                        onChange={(e) => setRemote(!remote)}/>
                                        Include remote? 
                            </label><br/>
                            <input 
                                className="btn btn-sm btn-primary" 
                                data-testid="searchButton"
                                type="submit" 
                                value="Search" />
                        </form>
                        <hr />
                        {pastResults.length > 0 ? (
                            <p>Searching for keyword: <b>{pastResults[pastResults.length -1]}</b></p>
                        ) : null}

                        <div className="card-container container">
                            {!!searchResults.length > 0 ? 
                                searchResults.map(listing => (
                                    <Row className="flex-left">
                                        <SearchResult 
                                            listing={listing}
                                        />
                                    </Row>
                                    
                                ))
                                : !!noResults ? (
                                    <>No results were returned from the search. Please search again</>
                                ) : (<> No results yet... </>)}
                        </div>
                    </div>
                </Route>
                <Route path='/:listingId'>
                    {searchResults.length > 0 ? (
                        <ResultDetail 
                            searchResults={searchResults}
                            listings={null}/>
                    ) : null}
                </Route>
            </Switch>
        </Router>
        
    )
};

export default Search;