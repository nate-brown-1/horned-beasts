import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import './App.css';
import { Modal } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplayed: false,
      beastTitle: ''
    }
  }

  handleHideModal = () => {
    this.setState({
      isModalDisplayed: false
    })
  }

  handleShowModal = (title) => {
    this.setState({
      isModalDisplayed: true,
      beastTitle: title
    })
  }

  render() {
    return (
      <>
        <Header/>
        <Main data={data}/>
        <Footer/>
        <Modal
          show={this.state.isModalDisplayed}
          onHide={this.handleHideModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.beastTitle}</Modal.Title>
            </Modal.Header>
            <p>these beasts like to show off</p>
          </Modal>
      </>
      )
  }
}

export default App;