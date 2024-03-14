import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../images/8Ms3s1B.jpeg'

import './index.css'

const ProductItem = props => {
    const {item} = props
    const {MobileName, Cost, Model, InStock, Manufacturer, ReleaseYear, id} = item
        return (
        <Link to={`/productdetails/${id}`} className="Link">
            <li className="product-item">
              <img src={Img} alt="product" className="thumbnail"/>
              <h1 className="title">{MobileName}</h1>
              <p className="brand">by {Manufacturer}</p>
              <div className="product-details">
                <p className="price">Rs {Cost}/-</p>
                <p className={InStock ? 'in-stock' : 'not-in-stock'}>{InStock ? 'In Stock' : 'Not In Stock'}</p>
              </div>
            </li>
          </Link>
        )
    
}

export default ProductItem

