import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
   <Auth0Provider
      domain="dev-mxp9kyux.us.auth0.com"
      clientId="1udh0jzyi2Dmfk4ilj0TGDDOQr7HDxDF"
      redirectUri={window.location.origin}
      useRefreshTokens
      cacheLocation='localstorage'
      // audience="http://localhost:3333/jobs"
      // scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

