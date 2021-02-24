import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
 
const Burger = (props) =>{
    const transformedIngredients = Object.keys(props.ingredients)//we transformed keys when they`re objec to array
        .map(igKey =>{
            return  [...Array(props.ingredients[igKey])].map((_, i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });
        //you know that map executes a funtion on each element in the input array
        //[...Array(3)] array three will give you an array with three empty spaces basically with three undifined  spaces

        return (
                <div className={classes.Burger}> 
                    <BurgerIngredient type="bread-top" />      
                    {transformedIngredients}
                    <BurgerIngredient type="bread-bottom" />      

                </div>
             );
};


export default Burger