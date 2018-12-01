
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData((props) => {
  let { Places } = props;
  let unorderedData = Places.reduce((acc, val) => {
    let key = val.Place_Lookup[0].toUpperCase()
    acc[key]
      ? acc[key].push(val)
      : acc[key] = [val]
    return acc
  }, {})

  let orderedKeys = Object.keys(unorderedData).sort()

  return (
    <div>
      {/* {JSON.stringify(orderedKeys)} */}
      { Object.values(orderedKeys).map((key) => {
          return (
            <ul>
              <h3>{key}</h3>
              <li style={{ listStyle: "none" }}>
              {
                unorderedData[key].map(place => {
                  return place.status === "publish"
                    ? <Link to={`/places/place/${place.Place_Lookup}`} style={{ display: "inline-block", padding: "0 7px" }}>{place.Place_Lookup}</Link>
                    : ""
                })
              }
              </li>
            </ul>
          )
      })}
    </div>
  )
})
