import './Cart.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.playerCart;
    const totalSalary = cart.reduce((total, player) => total + player.salary,0);
    return (
        <div>
            <h1>Player Cart</h1>
            <p>Total Player Added: {cart.length}</p>
            {
                cart.map(player => <li>{player.name} - <FontAwesomeIcon icon={faDollarSign} /> {player.salary}</li>)
            }
            <br/>
            <p>Total Amount: <FontAwesomeIcon icon={faDollarSign} /> {totalSalary}</p>
        </div>
    );
};

export default Cart;