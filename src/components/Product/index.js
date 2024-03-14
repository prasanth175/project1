import React, { Component } from 'react'

import './index.css'
import ProductItem from '../ProductItem';
import ProductContext from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import SideNavbar from '../SideNavbar';

class Product extends Component {
    render(){
        return (
            <ProductContext.Consumer>
      {value => {
        const {productsList} = value
        return (
            <div className='common-container'>
            <SideNavbar />
                <div className='products-container'>
                    <h1 className='products-heading'>Products</h1>
                    <div className='products-sub-container'>
                        <div className='products-top-container'>
                            <Link to='/addproduct'><button className='create-product-btn'>Create new</button></Link>
                            <input className='search-filter' type='search' placeholder='Search...' />
                        </div>
                        {/* <div className='filter-container'>
                            <div className='filter-right-container'>
                                <select>
                                    <option>All Category</option>
                                </select>
                                <select>
                                    <option>Latest Added</option>
                                </select>
                            </div>
                        </div> */}
            
                        <ul className='products-bottom-container'>
                            {productsList.productsList.map(each => (
                                <ProductItem item={each} key={each.id} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )

      }}
    </ProductContext.Consumer>
          )
    }
}

export default Product
