import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./firebaseConf.ts"
import ReactGA from 'react-ga'


ReactGA.initialize('G-K5YYKHBVLN');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
