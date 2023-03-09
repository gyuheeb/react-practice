import React from 'react';
import styles from './assets/css/App.css';
import Banner01 from './Banner01';
import Banner02 from './Banner02';

function App(props) {
    return (
        <div id='App'> 
          <Banner01 />
          <Banner02 />
        </div>
    );
}

export default App;