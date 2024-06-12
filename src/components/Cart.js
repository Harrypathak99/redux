import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products =useSelector(state => state.cart);
    const removeCart = (id) => {
        dispatch(remove(id));
    }
    const cards = products.map((product) => (
       
        <div key={product.id} style={{margin: '1%', backgroundColor: 'cyan', width: '48%', paddingBottom: '5px'}}>
        <img width={100} height={100} src={product.image} />
        <h1 style={{color: 'black'}}>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={()=> removeCart(product.id)}>Remove cart</button>
        </div>

    ));
    
  return (
    <>
    <p>Cart</p>
    <div className='card' style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", margin: '10px'}}>
    
    {cards}
    </div>
    </>
  )
}

export default Cart