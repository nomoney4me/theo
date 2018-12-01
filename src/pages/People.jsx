
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData((props) => {
  let { People } = props;
  let groupedData = Object.values(People).reduce((acc, val) => {
    let key = val.Name[0].toUpperCase()
    acc[key]
      ? acc[key].push(val)
      : acc[key] = [val]
    return acc
  }, {})

  let sortedKeys = Object.keys(groupedData).sort()

  return (
    <div className="listItems">
      { sortedKeys.map((key, i) => {
        return <ul key={i}>
          <h3 kye={i}>{key}</h3>
            { groupedData[key].map((person, i) => {
              return <Link to={`/people/person/${person.Person_Lookup}/ `}>
                      {person.Name}
                    </Link>
            })}
        </ul>
      })}
    </div>
  )
})



{/* <div>
  { Object.values(orderedKeys).map((key, i) => {
      return (
        <ul key={i}>
          <h3>{key}</h3>
          <li style={{ listStyle: "none" }}>
          {
            unorderedData[key].map((place, i) => {
              return place.status === "publish"
                ? <Link key={i} to={`/places/place/${place.Place_Lookup}`} style={{ display: "inline-block", padding: "0 7px" }}>{place.Place_Lookup}</Link>
                : ""
            })
          }
          </li>
        </ul>
      )
  })}
</div> */}