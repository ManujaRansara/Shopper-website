import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import drop_down from '../Assets/Frontend_Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const[menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-viible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src ={logo} alt=''/>
            <p>SHOPPER</p>
            </div>
            <img className='dropdown' onClick={dropdown_toggle} src={drop_down} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/'>Shop</Link> {menu == 'shop'?<hr/>:<></>} </li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:'none'}} to ='/mens'>mens</Link> {menu == 'mens'?<hr/>:<></>} </li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'none'}} to ='/womens'>womens</Link> {menu == 'womens'?<hr/>:<></>} </li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:'none'}} to ='/kids'>kids</Link> {menu == 'kids'?<hr/>:<></>} </li>
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token') ? 
                <Link to ='/login'><button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button></Link>
                :
                <Link to ='/login'><button>Login</button></Link>
                }
            <Link to ='/cart'><button><img src={cart_icon} alt=''></img></button></Link>
            <div className='nav-cart-count'> {getTotalCartItems()} </div>
        </div>
    </div>
  )
}

export default Navbar
