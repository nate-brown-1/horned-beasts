import React from 'react';
import { Card } from 'react-bootstrap';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes:this.state.likes + 1,
    });  
  }

  handleHeaderClick = () => {
    this.props.handleShowModal(this.props.title, this.props.image_url);
  }

  render() {
    return (
      <>
        <Card className='beastCard'>
          <Card.Img
            variant='top'
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.image_title}
          />
          <Card.Body>
            <Card.Title>
              <h2 onClick={this.handleHeaderClick}>{this.props.title}</h2>
            </Card.Title>
            <Card.Text>
              <p>{this.props.description}</p>
              <p onClick={this.handleLikes}>Like</p>
              <p>💌 {this.state.likes}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
