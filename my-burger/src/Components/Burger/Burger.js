import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
 
const Burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)//we transformed keys when they`re objec to array
        .map(igKey =>{
            return  [...Array(props.ingredients[igKey])].map((_, i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr,err)=>{ //reduce is a built-in array funtion which allows us to transform an array into something else 
           return arr.concat(err)   //arr previous err current value  and then we ` ll take them as a object
        },[]);

        if(transformedIngredients.length === 0){
            transformedIngredients=<p>please start adding ingredients!</p>
        }

        console.log(transformedIngredients)

        return (
                <div className={classes.Burger}> 
                    <BurgerIngredient type="bread-top" />      
                    {transformedIngredients}
                    <BurgerIngredient type="bread-bottom" />      

                </div>
             );
};


export default Burger