import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router';
import ErrorFallback from './ErrorHandling/ErrorFallback';

function App() {
  return (
    <div className="App">
      <ErrorBoundary 
        FallbackComponent={ErrorFallback}> 
        <HashRouter>
          <Router/>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
