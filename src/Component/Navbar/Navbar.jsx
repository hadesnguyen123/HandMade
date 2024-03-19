import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt='hình ảnh' width={150}></img>
                <p>Felix</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'} >
                        Shop
                    </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("category") }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/category'} >
                        Category
                    </Link>
                    {menu === "category" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("instruction") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to={'/instruction'} >Instruction  </Link> {menu === "instruction" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/cart'}>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
