import React from "react";
import {Link, useRouteMatch} from 'react-router-dom';
function PizzaLists (props) {
  const  {items} = props ;
  console.log(items.name)
  const {url} = useRouteMatch();
  return(
  <div>
      {items.map(item => (
        <div key={item.id}> 
           <Link to = {`${url}/${item.id}`}>
              <img
                 src={item.url}
                 alt={item.name}
              />
              <p>{item.name}</p>
           </Link> 
           <p>{item.price}</p>
        </div> 
      )

      )}
        
  </div>)
}

export default PizzaLists;