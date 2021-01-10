import React from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <li className={`${classes.NavigationItem} ${props.isActive ? classes.Active : ''}`}>
            <NavLink onClick={props.onSideDrawerClosed} exact to={props.link} activeClassName={classes.Active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem;