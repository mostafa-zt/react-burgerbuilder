import React, { Component } from 'react';
import Order from '../../components/Order/Order';

class Orders extends Component {
    render() {
        return (
            <div>
                <h4>Orders...</h4>
                <Order />
                <Order />
            </div>
        )
    }
}

export default Orders