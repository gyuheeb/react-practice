import React,{Fragment, Component} from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {
  render(){
      return (
          <div id="App">
            <Header />
            <Content />      
          </div>    
        );
  }
 
}

export default App;