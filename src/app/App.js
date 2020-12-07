import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from '../router.config';
import Header from './../shared/header/header';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div class="Bluemarble-Docs-Template-Example-Destroyed">
          <Header />
          <main id="page-content-wrapper" role="main">
            <Routers />
          </main>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
