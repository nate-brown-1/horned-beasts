import React from 'react';

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
        <article>
          <h2>
            {this.props.title}
          </h2>
          <img
            src={this.props.imageUrl}
            alt={this.props.imageAlt}
            title={this.props.imageTitle}>
          </img>
          <p onClick={this.handleLikes}>Like</p>
          <p>💌 {this.state.likes}</p>
          <p>
            {this.props.description}
          </p>
        </article>
      </>
    );
  }
}

export default HornedBeast;

