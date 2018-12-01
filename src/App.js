import React from 'react';
import { Router, Link, Switch } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import { Container, Col, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';


const App = () => (
  <Router>
    <Container fluid>
      <Row>
        <nav>
          <Link exact to="/">Home</Link>
          <Link to="/people">People</Link>
          <Link to="/places">Places</Link>
        </nav>
      </Row>
      <Row>
        <Col lg={12} className="content">
        <Switch>
          <Routes />
        </Switch>
        </Col>
      </Row>
    </Container>
  </Router>
)

export default hot(module)(App)
