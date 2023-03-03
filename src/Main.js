import React from 'react';
import HornedBeast from './HornedBeast';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Main.css';


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
          handleShowModal={this.props.handleShowModal}
        />
      )
    }
    )

    return (
      <>
        <main>
          <>
          <div className="HornsForm">
          <Form onSubmit={this.props.handleSubmit}>
            <Form.Label onChange={this.handleTitleChange}>Beast Title
              <Form.Control type="text" name="title" />
            </Form.Label>
            <Form.Label>Select Number of Horns
              <Form.Select name="select-horns" onChange={this.handleHornsChange}>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">Very Horny</option>
              </Form.Select>
            </Form.Label>
            <Button type="submit">Submit</Button>
          </Form>
          </div>
          <div className='beastBox'>
            {ARRAY_OF_BEASTS}
          </div>
          </>
        </main>
      </>
    );
  }
}

export default Main;