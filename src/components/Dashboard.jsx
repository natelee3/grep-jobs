import { useAuth0 } from "@auth0/auth0-react";
import './Dashboard.css';
import SavedResult from "./SavedResult";
import ResultDetail from './ResultDetail';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = (props) => {
    const defaultListings = [{
        company_name: "Greenwood, Inc.",
        company_num_employees: null,
        date_posted: "2021-07-04T04:00:00Z",
        employment_type: "full time",
        id: 88862,
        keywords:["mysql", "terraform", "node", "aws", "s3", "kotlin", "javascript", "php", "restful", "swift", "android", "ios"],
        location: "Atlanta",
        logo: null,
        remote: false,
        role: "iOS Senior Mobile App Engineer",
        source: "Stackoverflow",
        text: " <p><strong>About The Opportunity</strong></p>\n<p>Are you passionate about developing mobile applications and translating code into user-friendly apps? Do you have an entrepreneurial spirit and thrive in environments where creating phenomenal products is second nature? Our platform offers the experience and growth you are looking for, and we would like to meet you!</p>\n<p>We are Greenwood, a neo-digital banking platform created with one mission and goal to provide excellent financial opportunity within the Black and Latinx communities by creating and recirculating wealth and prosperity. Founded on the same principle as the original Greenwood District in the 1920s where the recirculation of black wealth occurred all day, every day, and where black businesses thrived.</p>\n<p>We are seeking a Senior iOS Mobile Application Engineer that is experienced and proven in product software application engineering. We believe that investment in a team of capable and experienced talent is crucial to building a great product. You will be working with our engineers to develop and maintain high-quality mobile applications.</p>\n<p><strong>Responsibilities:</strong></p>\n<ul>\n<li>Design, develop and build advanced applications for the iOS platform using Swift</li>\n<li>Create and produce fully functional mobile applications writing clean code</li>\n<li>Support the entire application lifecycle (concept, design, test, release, and support)</li>\n<li>Write unit and UI tests to identify malfunctions and ensuring legacy applications meet quality standards</li>\n<li>Troubleshoot and debug to optimize performance</li>\n<li>Design interfaces to improve user experience</li>\n<li>Work with the product development team to plan new features, gather specific requirement and suggest solutions</li>\n<li>Collaborate with internal teams to develop functional mobile applications while working in a fast-paced environment</li>\n</ul>\n<p><strong>Qualifications:</strong></p>\n<ul>\n<li>Bachelor’s or Master’s degree in Computer Science, Information Technology or related engineering discipline</li>\n<li>At least 5+ years’ experience in design and build of iOS mobile applications using Swift, Objective C, C++, Javascript on AWS hosting platform working with iOS frameworks such as Core Data, Core Animation, Core Graphics, and Core Text</li>\n<li>In-depth knowledge Swift programming language</li>\n<li>You have been a senior member or lead of a development team</li>\n<li>Diverse expertise in software languages including C++, Java, HTML, MySQL, PHP, Objective C, Javscript, Node.js. etc. frameworks, service-oriented/cloud architecture, and continuous integration</li>\n<li>Our tech stack: AWS hosting (S3 and EC2), Terraform, iOS on Swift, Android on Kotlin, Terraform, PostgresDB</li>\n<li>Strong experience working with remote data via RESTful and JSON</li>\n<li>Strong experience with third-party libraries, APIs, and OOP design principles</li>\n<li>Proven and demonstrable portfolio of released applications on the iOS market with a track record of delivering high-quality mobile software application products</li>\n<li>Excellent analytical skills with a good problem-solving attitude</li>\n<li>Excellent clear and concise written and verbal communication</li>\n<li>Previous experience working with a successful start-up team is a plus</li>\n</ul>\n<p><strong>***NO THIRD PARTY AGENCIES****** </strong>We are unable to provide visa sponsorship for this role.</p>\n<p>We are an <strong>equal opportunity</strong> employer. All applicants will be considered for <strong>employment</strong> without attention to race, color, religion, sex, sexual orientation, gender identity, national origin, veteran, or disability status.</p> <br/><br/><h2>Skills &amp; requirements</h2> <p><ul>\n<li>At least 5+ years’ experience in design and build of iOS mobile applications using Swift, Objective C, C++, Javascript on AWS hosting platform working with iOS frameworks such as Core Data, Core Animation, Core Graphics, and Core Text</li>\n<li>In-depth knowledge Swift programming language</li>\n<li>You have been a senior member or lead of a development team</li>\n</ul>\n<p>Greenwood headquarters is in Atlanta, GA  must be in the US; possibly hiring for (2) roles</p></p> <br/><br/>",
        url: "https://findwork.dev/88862/ios-senior-mobile-app-engineer-at-greenwood-inc",
    },];
    
    const [listings, setListings] = useState(defaultListings);

    const { path, url } = useRouteMatch()
    const { user, isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        (async () => {
            const url = `http://localhost:3333/jobs/${user.sub.slice(6)}`
            const listings = await fetch(url).then(response => response.json());
            setListings(listings)
        })();
    },[user])

    const _getListings = async () => {
        const url = `http://localhost:3333/jobs/${user.sub.slice(6)}`
        const listings = await fetch(url).then(response => response.json());
        setListings(listings)
    };

    console.log('user info: ', user)

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={path}>
                        <div className="content">
                            {!!isAuthenticated ? (
                                <>
                                    <h1>Saved Jobs for {user.nickname}</h1>
                                    <div className="content">
                                        {listings.map(listing => (
                                            <SavedResult 
                                                listing={listing}
                                                onUpdate={()=>_getListings()}/>
                                        ))}
                                    </div>
                                </>
                            ) : (<h2>You must <Link onClick={ async() => await loginWithRedirect()} href='/dashboard' style={{color: 'blue'}}>Login/Sign Up </Link>
                            to view this page </h2>)}
                        </div>
                    </Route>
                    <Route path={`${url}/:listingId`}>
                        {listings.length > 0 ? (
                            <ResultDetail searchResults={localStorage.getItem('savedListings')}/>
                        ) : null}                    
                    </Route>
                </Switch>
            </Router>
        </>
       
    )
};

export default Dashboard;