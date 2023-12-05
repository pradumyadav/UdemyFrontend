import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import BootstrapCart from './BootstrapCart';

function Cart() {
    // const [cartItems, setCartItems] = useState([]);
    const userId = localStorage.getItem("userId");
    console.log(userId);
    useEffect(() => {
        axios
          .post("http://localhost:4005/cart/fetchCartByUser", {userId})
          .then((res) => setCartItems(res.data))
          .catch((err) => console.log(err));
      }, []);

  return (
    <div>
        {/* {cartItems?.map((product) => (
            <div>

                <div>{product.item.title}</div>
                <img src={product.item.img} alt="Not Fond" />
        <div className="homeTitle">
          {product.item.title.slice(0, 45)}...
        </div>
                <div></div>
                <div></div>
            </div>
           
        ))} */}
        <BootstrapCart/>

    </div>
  )
}


export default Cart