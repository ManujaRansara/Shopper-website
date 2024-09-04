import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts') //fetched data from the database
    .then((res)=>res.json())                         //converted the response to json
    .then((data)=>{setAllProducts(data)});           //data is saved in all products variable
  }

  useEffect(()=> {
    fetchInfo();
  },[])

  const remove_product = async (id) =>{
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers : {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products </h1>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-product-all">
        <hr />
        {allproducts.map((product,index)=> {
          return <><div key={index} className="list-product-format-main list-product-format">
              <img src={product.image} alt="" className="list-product-icon" />
              <p>{product.name}</p>
              <p>Rs.{product.old_price}</p>
              <p>Rs.{product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={() => {remove_product(product.id)}} src={cross_icon} className='list-product-remove-icon' alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
