import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients) // {"meat", "cheese",...}
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey].amount)].map((_, index) => {
                return <BurgerIngredients key={ingredientsKey + index} type={ingredientsKey} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (tranformedIngredients.length === 0) {
        tranformedIngredients = (<div>Add some gredient!</div>);
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {tranformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    )
}


export default burger;