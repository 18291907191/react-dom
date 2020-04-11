import React from 'react';
import './App.css';
import renderRoutes from './router/router-config';
import routes from './router/index';

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
