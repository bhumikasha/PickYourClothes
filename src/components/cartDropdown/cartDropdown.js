import React from 'react';
import './cartDropdown.styles.scss';
import CustomButton from '../custombutton/custombutton';
import CartItem from '../cartItem/cartItem';
import {connect} from 'react-redux';

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={CartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);