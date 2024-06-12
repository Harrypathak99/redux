import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';


const Product = () => {
    const dispatch = useDispatch();
    const[products, setProducts] = useState([]);

    const pro = async () => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(data => data.json()
    // .then(result => getProducts(result)));
    await axios.get('https://fakestoreapi.com/products').then((response) => {
        setProducts(response.data);
      });
    };
    const addToCart = (product) => {
        dispatch(add(product));
    }
    const cards = products.map((product) => (
       
        <div key={product.id} style={{margin: '1%', backgroundColor: 'cyan', width: '48%', paddingBottom: '5px'}}>
        <img width={100} height={100} src={product.image} />
        <h1 style={{color: 'black'}}>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>

    ));

    

    useEffect(() => {
        pro();
    }, []);

  return (
    <>
    
    <div className='card' style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", margin: '10px'}}>
    {cards}
    </div>
    </>
  )
}

export default Product