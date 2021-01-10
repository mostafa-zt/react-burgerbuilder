import React from 'react';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let attahcedClasses = [classes.SideDrawer, classes.Close ,classes.MobileOnly];
    if (props.open) {
        attahcedClasses = [classes.SideDrawer, classes.Open , classes.MobileOnly];
    }
    return (
        <Aux>
            <Backdrop className={classes.MobileOnly} clicked={props.closed} show={props.open} />
            <div className={attahcedClasses.join(' ')}>
                <NavigationItems onSideDrawerClosed={props.closed} />
            </div>
        </Aux>
    )
}






export default sideDrawer;