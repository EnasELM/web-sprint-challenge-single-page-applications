import React from "react"; 
export default function PizzaIngredients(props){
    const {text}= props;
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}