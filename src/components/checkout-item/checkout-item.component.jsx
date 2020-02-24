import React from 'react';
import { connect } from 'react-redux';
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#9747;
      </div>
    </div>
  );
};

const mapDispathToProps = dispatch => ({
  clearItem: cartItem => dispatch(clearItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem))
});

export default connect(null, mapDispathToProps)(CheckoutItem);
