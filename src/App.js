import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <Container>
      <Row>
        <Header />
        <Col className="mt-4">
          <Route path="/">
            <Accordion items={items} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Button
              variant="secondary"
              onClick={() => setShowDropdown(!showDropdown)}
              className="mb-4"
            >
                Toggle Dropdown
            </Button>
            {showDropdown ?
              <Dropdown
                label="Select a Color:"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
              />
            : null
            }
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </Col>
      </Row>
    </Container>
  );
};
