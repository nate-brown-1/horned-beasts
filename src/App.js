import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import './App.css';

class App extends React.Component {
  // constructor(props) {
    // super(props);
  //   this.state = {
  //     test: 'testing'
  //   }
  // }

  render() {
    return (
      <>
        <Header/>
        <Main data={data}/>
        <Footer/>
      </>
      );
  }
}

export default App;