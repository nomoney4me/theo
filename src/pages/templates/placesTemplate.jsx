import React from 'react';
import { withRouteData, Link } from 'react-static';
import { Row, Col, Table } from 'reactstrap';

export default withRouteData((props) => {
  let { place } = props;
  let imgDetail = `/assets/places/${place.Place_Lookup}-detail.png`
  let imgWide = `/assets/places/${place.Place_Lookup}-wide.png`

  return (
    <Col lg={12} className="template">
      {/* {JSON.stringify(place)} */}

      <Row><h1><i>{place.Display_Title}</i></h1></Row>

      <Row>
        <Col md={5} lg={{ size: 5 }}>
          <Col lg={12}>Detailed Image</Col>
          <Col><a href={imgDetail}><img src={imgDetail} /></a></Col>
        </Col>

        <Col md={5} lg={{ size: 5, offset: 1 }}>
          <Col lg={12}>Wide Image</Col>
          <Col><a href={imgWide}><img src={imgWide} /></a></Col>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col lg={12}>
          <h3>Related People</h3>
        </Col>

        <Col lg={12} style={{ float: "left" }}>
          {place["Has_been_here"]
            ? place["Has_been_here"].split(',').map((person, i) => {
              return <Link key={i} style={{ display: "inline-block" }} to={`/people/person/${person}`}>{person}</Link>
            })
            : ""
          }
        </Col>
      </Row>

      <hr />

      <Row>
        <Col lg={12}>
          <h3>Related People</h3>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col lg={12}>
          <h3>Verses</h3>
        </Col>
        <Col lg={12} style={{ float: "left" }}>
        { place.Verses
            ? place.Verses.split(',').map((verse, i) => {
              return <a key={i} style={{ display: "inline-block" }} to={`/passage/verse/${verse}`}>{verse}</a>
            })
            : ""
          }
        </Col>
      </Row>

      {/* <p><b>Related Events</b></p>
      <hr />


      <p><b>Verses</b></p>
      <hr />
         */}

      {/* <img src={} /> */}
    </Col>
  )
})
