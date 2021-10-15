import React,{  useEffect } from 'react' ;

function  Pizza(props) {
   
   
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
   
    const { name, value, checked, type } = evt.target;
    console.log(evt.target.type);
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form  onSubmit={onSubmit} id = "pizza-form">
      <div >
        <h2>Make Your Own Pizza</h2>

       
        <button disabled={disabled} id = "order-button">Order Button</button>

        <div className='errors'>
          
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.spacial}</div>
          
        </div>
      </div>

      <div >
        <h4>Add Ingredients</h4>

       
        <label>Name&nbsp;
          <input
            id ="name-input"
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        

        {/* ////////// DROPDOWN ////////// */}
        <label>Size
          <select
            id = "size-dropdown"
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select Pizza Size -</option>
            <option value='s'>Small</option>
            <option value='m'>Medium</option>
            <option value='l'>Large</option>
            <option value='xl'>X Large</option>
          </select>
        </label>

        
    

        
      </div>

      <div >
        <h4>Topping</h4>

        
        <label> Italian Sausage
          <input
            type="checkbox"
            name="topping1"
            onChange={onChange}
            checked={values.topping1}
          />
        </label>

        <label> Philly Steak
          <input
            type="checkbox"
            name="topping2"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>

        <label> Premium Chicken
          <input
            type="checkbox"
            name="topping3"
            onChange={onChange}
            checked={values.topping3}
          />
        </label>
        <label>  Salami
          <input
            type="checkbox"
            name="topping4"
            onChange={onChange}
            checked={values.topping4}
          />
        </label>
        <label>Special&nbsp;
          <input
            id ="special-text"
            value={values.spacial}
            onChange={onChange}
            name='special'
            type='text'
          />
        </label>
      </div>
    </form>
  )
}


export default Pizza;