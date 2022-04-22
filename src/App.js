import * as React from 'react';
import NavBar from './navBar';
import Body from './body'

export default function App() {
  return (
    <React.Fragment>
      <NavBar />

      <div style={{marginTop:80,background:'#ffffff'}}>
        <Body />
    
      </div>
      
    
    </React.Fragment>
  );
}
