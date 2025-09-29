{/*
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'


const Cart = () => {

const {cartItems,food_list,removeFromCart} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
          {food_list.map((item,index)=>{

              if(cartItems[item._id]>0)

                {
                  return(
                    <div className='cart-items-title cart-items-item'>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>{item.price*cartItems[item._id]}</p>
                    <p>x</p>

                      </div>
                  )
                }

          })}
      </div>
      
    </div>
  )
}

export default Cart
*/}

import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item)=>{
          if (cartItems[item._id] > 0) {
            return (
              <div>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs{item.price * cartItems[item._id]}</p>
                <button className='cross' onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
              <hr />
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
              <hr />
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:2}</p>
              <hr />
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
           <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div><br />
        <div className="card-promocode">
          <div>
            <p>If u Have Promo Code , Enter here</p>
            <div className='cart-promocode-input'>
                <input type='text' placeholder='promo code' />
                <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
