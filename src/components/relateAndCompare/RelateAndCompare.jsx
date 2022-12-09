import React from 'react';
import Relate from './Relate.jsx';
const RelateAndCompare = ({product}) => {
  return(
    <div className="RelateAndCompare">
      <Relate product={product} choice={'compare'}/>
      <div className="outfit">

      </div>
    </div>

  )
}

export default RelateAndCompare;
