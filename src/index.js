import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

class Application extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
};


ReactDOM.render(<Application />, document.querySelector('.container'));
