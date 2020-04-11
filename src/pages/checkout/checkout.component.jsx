import React from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckOutPage = ({ cartitems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Desctiption</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartitems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>Total: &#8377;{total}</span>
    </div>
    <div className="test-warning">
      *Please use the following credit card for payments*
      <br />
      4242 4242 4242 4242 - Expiry: 01/21 - CVV: 123
    </div>
    <StripCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartitems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
