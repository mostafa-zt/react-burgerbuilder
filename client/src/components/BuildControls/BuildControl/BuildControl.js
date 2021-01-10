import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className={classes.ControlItem}>
            <div className={classes.ControlLabel}>
                {props.label}
                <div className={classes.UnitPrice}>(${props.ingsPrice})</div>
            </div>
            <div className={classes.ControlButtons}>
                <button className={`${classes.ControlButton} ${classes.ControlButtonLess}`} onClick={props.less} disabled={props.disabledInfo}>Less</button>
                <span className={classes.Ing_Value}>{props.ingsAmount}</span>
                <button className={`${classes.ControlButton} ${classes.ControlButtonAdd}`} onClick={props.add}>More</button>
            </div>
            {/* <div>Price:{parseFloat(props.ingsTotalPrice).toFixed(2)}</div> */}
        </div>
    )
}

export default buildControl;