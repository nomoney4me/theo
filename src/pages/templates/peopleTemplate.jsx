import React from 'react';
import { withRouteData, Link } from 'react-static';

import { Row, Col } from 'reactstrap';

export default withRouteData((props) => {
  let { person } = props;

  return (
    <Col lg={12} className="template">
    {/* {JSON.stringify(person)} */}
      <Row><h1><i>{person.Name}</i></h1></Row>

      <Row>
        <b style={{ fontWeight: "bold" }}>Also called: </b> <span style={{ marginLeft: "5px" }}>{JSON.stringify(person.Aliases)}</span>
      </Row>
      
      <hr />

      <Row>
        <Col lg={12}><h3>Related People</h3></Col>
        <Col>{JSON.stringify(person.Personal_network)}</Col>
      </Row>
      
      <hr />
      
      <Row>
        <Col lg={12}><h3>Related Events</h3></Col>
        <Col>{JSON.stringify(person.Events)}</Col>
      </Row>

      <hr />
      
      <Row>
        <Col lg={12}><h3>Related Places</h3></Col>
        <Col>{JSON.stringify(person.Has_Been_to)}</Col>
      </Row>

      <hr />
      <Row>
        <Col lg={12}><h3>Verses</h3></Col>
        <Col lg={12}>{Object.values(person.Verses).map((verse, i) => {
          return <Link key={i} to={`/verses/verse/${verse.Osis_Ref}`}>{verse.Osis_Ref}</Link>
        })}</Col>
      </Row>
    </Col>
  )
})
