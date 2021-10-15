
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link ,Switch} from 'react-router-dom';
import schema from './validation/formSchema';
import * as yup from 'yup';

import PizzaLists from './PizzaLists.js';
import PizzaList from './PizzaList.js';
import Pizza from './Pizza';
import HomePage from './HomePage';

const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}
const pizzaPic = [ 
{id: 1,url:'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',name:'pizze purger',price:'30$',time:'10mins',ingredients:`for 16 servings

2 ½ cups warm water
1 teaspoon sugar
2 teaspoons active dry yeast
7 cups all-purpose flour, plus more for dusting
6 tablespoons extra virgin olive oil, plus more for greasing
1 ½ teaspoons kosher salt
¼ cup semolina flour`},
{id: 2,url:'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',name:'pizze purger',price:'30$',time:'10mins',ingredients:`for 16 servings

2 ½ cups warm water
1 teaspoon sugar
2 teaspoons active dry yeast
7 cups all-purpose flour, plus more for dusting
6 tablespoons extra virgin olive oil, plus more for greasing
1 ½ teaspoons kosher salt
¼ cup semolina flour`},
{id: 3,url:'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',name:'pizze purger',price:'30$',time:'10mins',ingredients:`for 16 servings

2 ½ cups warm water
1 teaspoon sugar
2 teaspoons active dry yeast
7 cups all-purpose flour, plus more for dusting
6 tablespoons extra virgin olive oil, plus more for greasing
1 ½ teaspoons kosher salt
¼ cup semolina flour`},
];
const initialFormValues={
  name:'',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
};


const initialDisabled = true;
const initialErrors={
  name:'',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
};
export default const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)     
  const [pizzaOrder, setPizzaOrder] = useState([]); 
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      
      
    }
    
  }
  
  return (
    
    <div>
       <header>
        <nav>
          <button>
          <Link to="/">Home</Link>
          </button>
          <button>
          <Link to="/pizza-form">Pizza Page</Link>     
          </button>     
        </nav>
      </header>
      <div >
    <h1>Friends App</h1>
    <Pizza
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
    />

    
  </div>
      <Switch>
      <Route path="/pizza-shop/:id">
        <PizzaList items={pizzaPic} />
      </Route>
      <Route path="/pizza-form">
        <Pizza items={pizzaOrder} />
      </Route>
      <Route path='/pizza-shop'>
        <PizzaLists items={pizzaPic} />
      </Route>
      <Route  path="/">
        <HomePage />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
