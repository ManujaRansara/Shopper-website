import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"Women",
    new_price:"",
    old_price:""
  })

  //To display the product image after selcting it
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  //To make the add product function work
  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  //To add the product to the database using add button

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails; //creates a copy of product

    let formData = new FormData(); //creates an empty form data
    formData.append('product',image); //appends the image in the form data

    //sends the above form data to the API passes the backend URL
    await fetch('http://localhost:4000/upload',{  //hits this endpoint with the post method
        method:'POST',
        headers:{
          Accept:'application/json',
        },
        body:formData,
    }) .then((resp) => resp.json()).then((data)=>{responseData=data}); //sets response data = the data we got through promise
    if(responseData.success) {  
      product.image = responseData.image_url; //image is saved in the multer storage we can now get it's URL through backend
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success ? alert ("Product Added Successfully") : alert("Product Adding Failed")
      })
    }
  }

  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name}  onChange={changeHandler} type="text" name='name' placeholder='type here' />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price}  onChange={changeHandler} type="text" name="old_price" id="" placeholder='Type here' />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price}  onChange={changeHandler} type="text" name="new_price" id="" placeholder='Type here' />
          </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category}  onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="none">--Select Category--</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kids</option>
            </select>
          </div>
          <div className="addproduct-itemfield">
            <label htmlFor="file-input">
              <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-image' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
          </div>
          <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Add Product</button>
    </div>
  )
}

export default AddProduct
