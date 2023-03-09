import React from 'react';

function App(props) {
    const h1style = {
        width: 200,
        height:"100px",
        padding: 20,
        color: '#111',
        backgroundColor: '#F0FFFF',
    };
    return (
        <div id='App'> 
          <h1 style={h1style}>Inline Styling</h1>  
        </div>
    );
}

export default App;