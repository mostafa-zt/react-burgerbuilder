import React from 'react';
import classes from './Backdrop.css'

const backdrop = (props) => {
    return (
        props.show ? <div onClick={props.clicked} className={`${classes.Backdrop} ${props.className ? props.className : ''}`}></div> : null
    )
}


export default backdrop;