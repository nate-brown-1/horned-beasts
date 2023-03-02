import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {

    const ARRAY_OF_BEASTS = [];
    
    this.props.data.forEach((beast) => {
      ARRAY_OF_BEASTS.push(
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          image_title={beast.title}
          description={beast.description}
          handleOpenModal={this.props.handleShowModal}
        />
      )
    }
    )

    return (
      <>
        <main>
          <div className="beastBox">
            {ARRAY_OF_BEASTS}
          </div>
        </main>
      </>
    );
  }
}

export default Main;