import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.clicked} className={`${classes.ToggleWrap} ${props.showSideDrawer ? classes.active : ''} ${classes.MobileOnly}`}>
                <span className={`${classes.ToggleBar}`}></span>
            </div>
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;