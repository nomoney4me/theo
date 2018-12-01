
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData((props) => (
  <div>
    {/* {JSON.stringify(props.people.data.People)} */}
    <ul>
      { props.People.map((person, i) => {
        return <li key={i}><Link to={`/people/person/${person.Person_Lookup}/ `}>
                {person.Name}
              </Link></li>
      })}
    </ul>
  </div>
))
