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
      beastTitle: '',
      beastImg: ''
    }
  }

  handleHideModal = () => {
    this.setState({
      isModalDisplayed: false
    })
  }

  handleShowModal = (title, image_url) => {
    this.setState({
      isModalDisplayed: true,
      beastTitle: title,
      beastImgUrl: image_url
    })
  }

  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          handleShowModal={this.handleShowModal}
          />
        <Footer/>
        <Modal className='beastModal'
          show={this.state.isModalDisplayed}
          onHide={this.handleHideModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.beastTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img className='modalImg'
                        src={this.state.beastImgUrl}
                        alt={this.props.description}
                        title={this.props.image_title}
            />
            </Modal.Body>
            <Modal.Footer className='beastFooter'>these beasts like to show off</Modal.Footer>
          </Modal>
      </>
      )
  }
}

export default App;