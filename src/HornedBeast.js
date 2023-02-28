import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <article>
        <h2>
          {this.props.title}
        </h2>
        {/* <img
          src={require(this.props.imageUrl)}
          alt={this.props.imageAlt}
          title={this.props.imageTitle}
        /> */}
        <p>
          {this.props.description}
        </p>
        </article>
      </>
      );
  }
}

export default HornedBeast;

