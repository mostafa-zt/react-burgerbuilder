import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' }
]
// const PRICE_INGREDIENTS = {
//     salad: 0.47,
//     bacon: 0.87,
//     meat: 1.79,
//     cheese: 0.43,
// }

const buildControls = (props) => {
    return (
        <div className={classes.BuildControl}>
            <p className={classes.TotalPrice}>{parseFloat(props.price).toFixed(2)}</p>
            {
                controls.map(ctrl => {
                    return (
                        <BuildControl
                            key={ctrl.label}
                            label={ctrl.label}
                            add={() => props.add(ctrl.type)}
                            less={() => props.less(ctrl.type)}
                            disabledInfo={props.disabledInfo[ctrl.type]}
                            purchasable={props.purchasable}
                            ingsAmount= {props.ingredients[ctrl.type].amount}
                            ingsTotalPrice= {props.ingredients[ctrl.type].price}
                            ingsPrice= {props.ingredients[ctrl.type].priceUnit}
                            price = {props.price}
                        />
                    );
                })
            }
            <button onClick={props.showModal} className={classes.OrderButton} disabled={!props.purchasable}>Purchase</button>
        </div>

    );
}

export default buildControls;