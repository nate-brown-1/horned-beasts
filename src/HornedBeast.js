import React from 'react';
import { Card } from 'react-bootstrap';

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

  render() {
    return (
      <>
        <Card className="cardClass">
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.image_title}
          />
          <Card.Body>
            <Card.Title>
              <h2>{this.props.title}</h2>
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
