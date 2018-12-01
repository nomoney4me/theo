
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
    <div className="listItems">
      {/* {JSON.stringify(orderedKeys)} */}
      { orderedKeys.map((key, i) => {
          return (
            <ul key={i}>
              <h3>{key}</h3>
              <li>
              {
                unorderedData[key].map((place, i) => {
                  return place.status === "publish"
                    ? <Link key={i} to={`/places/place/${place.Place_Lookup}`}>{place.Place_Lookup}</Link>
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
