# Grep Jobs
A full stack web application to search for and save developer jobs. 

Completed as DigitalCrafts solo React project <br/>
Active development: August 3-10, 2021

Live Deployment: [grepjobs.netlify.app](grepjobs.netlify.app)
## Overview
Users can search for open software developer jobs, filtering by keyword and/or location. Logged-in users can also save jobs and view them in their dashboard.
## Built with:
Built with the PERN stack - 
* [PostgreSQL](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)

### Languages:
- CSS
- JavaScript
- SQL

### Additional Frameworks
- React-Bootstrap

### Node Module Dependencies
- bootstrap 
- cors
- date-fns 
- dompurify
- express
- pg-promise
- react
- react-bootstrap
- react-dom
- react-image-fallback
- react-router-dom
- react-scripts

### Public APIs
- [FindWork](https://findwork.dev)

<!-- ## Screenshots
Desktop
Mobile -->

## Features
* Users can search for job postings aggregated from sources such as Stackoverflow, WeWorkRemotely, and Dribbble. 
   * Search by keyword (technology, role, company name) and/or location
   * Choose whether or not to include remote-work results
   * Results are sorted by relevance 
   * Quick display in card format, includes company name, role, and how long ago it was posted
   * Detailed view adds job type (full-time, part-time), full description, and link to apply
* Logged-in users can save jobs and view them in their dashboard

<!-- GETTING STARTED -->
## Getting Started

To set up a local copy, follow the steps below:

### Prerequisites

Get a free API Key at [FindWork Jobs API](https://findwork.dev/developers/)

Install npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone the Repository

   ```sh
   git clone https://github.com/natelee3/grep-jobs.git
   ```
   
Install NPM packages

   ```sh
   npm install
   ```
   
Enter your API in `proxy.js`

   ```JS
   const API_KEY = fetch("https://findwork.dev/api/jobs/", {
  headers: {
    Authorization: "Token xxxx"
  }
});
   ```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/natelee3/grep-jobs/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Branch (`git checkout -b yourbranch/Contribution`)
3. Commit your Changes (`git commit -m 'added amazing feature'`)
4. Push to the Branch (`git push origin yourbranch/Contribution`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact
Nate Lee - [Portfolio](https://natelee.dev) - nleepercussion [at] gmail.com

