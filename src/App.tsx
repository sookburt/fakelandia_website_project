import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router';

 /* https://github.com/bvaughn/react-error-boundary */

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary >  */}
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
