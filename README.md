<!-- [![Contributors][contributors-shield]][contributors-url]
[![Languages][languages-shield]][languages-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url] --> 
# Grep Jobs
A full stack web application to search for and save developer jobs. 

Completed as DigitalCrafts solo React project <br/>
Active development: August 3-10, 2021

Live Deployment: [grepjobs.netlify.app](grepjobs.netlify.app)
## Overview
Users can search for open software developer jobs, filtering by keyword and/or location. Logged-in users can also save jobs and mark them as "applied."

## Built with:
Built with the PERN stack - 
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)

### Languages:
- HTML
- CSS
- JavaScript
- SQL

### Frameworks
- React-Bootstrap

### Node Module Dependencies
- express
- date-fns
- pg-promise
- cors
- react
- react-router-dom
- react-dom
- react-scripts
- react-bootstrap
- bootstrap
- dompurify
- react-image-fallback

### Public APIs
- [FindWork](https://findwork.dev)

<!-- ## Screenshots
Desktop
Mobile -->

## Features


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








<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/alynapchuk/git-hired-app?color=219ebc&style=for-the-badge
[contributors-url]: #

[languages-shield]: https://img.shields.io/github/languages/count/alynapchuk/git-hired-app?color=90ab60&style=for-the-badge
[languages-url]: #

[forks-shield]: https://img.shields.io/github/forks/alynapchuk/git-hired-app?color=f5af00&style=for-the-badge
[forks-url]: #

[issues-shield]: https://img.shields.io/bitbucket/issues-raw/alynapchuk/git-hired-app?style=for-the-badge
[issues-url]: #

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alynapchuk/

[product-screenshot]: images/screenshot.png