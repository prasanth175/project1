import React, { Component } from 'react';
import './index.css';
import ProductItem from '../ProductItem';
import ProductContext from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import SideNavbar from '../SideNavbar';

class Product extends Component {
  state = {
    filteredProducts: null // Initially, the filteredProducts state is null
  };

  onSearchFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const { productsList } = this.context;
    const filteredProducts = productsList.productsList.filter(product =>
      product.MobileName.toLowerCase().includes(searchValue)
    );
    this.setState({ filteredProducts }); // Update the state with filtered products
  }

  render() {
    const { filteredProducts } = this.state;
    const { productsList } = this.context;
    const productsToRender = filteredProducts || productsList.productsList; // Use filteredProducts if available, otherwise use the original list

    return (
      <div className='common-container'>
        <SideNavbar />
        <div className='products-container'>
          <h1 className='products-heading'>Products</h1>
          <div className='products-sub-container'>
            <div className='products-top-container'>
              <Link to='/addproduct'><button className='create-product-btn'>Create new</button></Link>
              <input onChange={this.onSearchFilter} className='search-filter' type='search' placeholder='Search...' />
            </div>

            {productsToRender.length === 0 ? (
              <h1 className='no-products-txt'>No products available</h1>
            ) : (
              <ul className='products-bottom-container'>
                {productsToRender.map(each => (
                  <ProductItem item={each} key={each.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Product.contextType = ProductContext;

export default Product;
