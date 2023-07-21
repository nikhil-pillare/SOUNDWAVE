import React from 'react';

import './App.css';
import NavBar from './Components/LandingSections/NavBar';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
