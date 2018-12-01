import React from 'react';
import { withRouteData, Link } from 'react-static';

export default withRouteData((props) => {
  return <div>
    {JSON.stringify(props.person)}
  </div>
})
