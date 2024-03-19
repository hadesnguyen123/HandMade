import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const { product } = props
    console.log(product)
    const { addToCart } = useContext(ShopContext)

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sunt officiis voluptates praesentium explicabo. Sint, corrupti placeat tempore expedita, aut itaque, ea earum voluptates eligendi vitae ducimus! Reiciendis, sapiente harum?
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Type</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>A</div>
                        <div>B</div>
                        <div>C</div>
                        <div>D</div>
                    </div>

                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category:</span> Resin, Handmade, By Own </p>
                <p className="productdisplay-right-category"><span>Tags:</span> Latest, Beauty</p>
            </div>
        </div>
    )
}
