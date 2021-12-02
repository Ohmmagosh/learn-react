import React from 'react';
import './App.css';
import NestedComponent from './component/nested'
// import HelloComponent from './component/HelloComponent';

function App(){
    return(
      <div className="container">
          <NestedComponent/>
      </div>
    );
}

export default App;
