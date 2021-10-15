import React from "react";
import {Link, 
    useRouteMatch,
    useParams,
    Route,
    NavLink
} from 'react-router-dom';
import PizzaIngredients from './PizzaIngredients';

function PizzaList (props) {
    const  {items} = props;
    const  {id} = useParams();
    const  {url,path} = useRouteMatch();
    const  item = items.find(item => item.id === parseInt(id));
    if (!item) return <h2>sorry not found</h2>
    return(
        <div>
            <div>
              <div>
                 <img src={item.url}/>
            
              </div>
                    <div>
                       <h2>{item.name}</h2>
                       <h4>{item.price}</h4>
            
                     </div>
            </div>
            <nav>
                <NavLink to ={`${url}/ingredients`}>Ingredients</NavLink>
            </nav>
            <Route path={`${path}/ingredients`}>
                    <PizzaIngredients text={item.ingredients}/>
            </Route>
        </div>
    )
}

export default PizzaList;