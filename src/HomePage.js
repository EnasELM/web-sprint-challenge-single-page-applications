import React from "react";
import {useHistory} from 'react-router-dom';
function HomePage() {
 const history = useHistory();
 const pizzaBuild  = () => {
 history.push('./pizza-form')
     
 }
 
   
    const pizzaOrderShop = () => {
    history.push('./pizza-shop')
    }
 return(
   <div>
       <img src='https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
       alt='pizza'/>
       <button onClick={pizzaOrderShop}>Order NOW</button>
       <button onClick={pizzaBuild }>Build Your pizza</button>
   </div>  
 )
}
export default HomePage;