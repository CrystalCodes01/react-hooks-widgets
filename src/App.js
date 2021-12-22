import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end js framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating reusable components'
  }
]

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Accordion items={items} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
