import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import SideNavbar from '../SideNavbar';

import './index.css'

const AddProduct = () => {
  const history = useNavigate();
  const { addNewProduct } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    mobileName: '',
    price: '',
    description: '',
    stackCount: '',
    model: '',
    manufacturedBy: '',
    releaseYear: ''
  });

  const { mobileName, price, description, stackCount, model, manufacturedBy, releaseYear } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming addNewProduct is an asynchronous function
    await addNewProduct(mobileName, price, description, stackCount, model, manufacturedBy, releaseYear);
    // Navigate to the products page after form submission
    history('/products');
  };

  return (
    <div className='common-container'>
                        <SideNavbar />
                        <div className='add-product-container'>
            <div className='add-product-top-container'>
            <h1 className="add-book-heading">Add New Product</h1>
            <Link to='/products'><button className='back-button'>Back</button></Link>
            </div>
            <form className="sell-book-form" onSubmit={handleSubmit}>
              <label htmlFor="titleInput" className="sell-label">
                Mobile Name: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={handleChange}
              />
              <label htmlFor="titleInput" className="sell-label">
                Price: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={handleChange}
              />
              <label htmlFor="descInput" className="sell-label">
                Count in Stock: <span className="sell-star-txt">*</span>
              </label>
              <textarea
                type="text"
                id="descInput"
                className="sell-input"
                onChange={handleChange}
              />
              <label
                htmlFor="publicationInput"
                className="sell-label"
                cols="100"
              >
                Description: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="publicationInput"
                className="sell-input"
                onChange={handleChange}
              />
              <label htmlFor="isbnInput" className="sell-label">
              Manufactured By: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="isbnInput"
                className="sell-input"
                onChange={handleChange}
              />
              <label htmlFor="printedInput" className="sell-label">
                Model: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="printedInput"
                className="sell-input"
                onChange={handleChange}
              />
              <label htmlFor="sellingInput" className="sell-label">
                Release Year: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="sellingInput"
                className="sell-input"
                onChange={handleChange}
              />

              {/* <label htmlFor="fileInput" className="sell-label">
                Product Image
              </label>
              <input id="fileInput" type="file" onChange={this.onFile} /> */}
              <div className="sell-btn-container">
                <button type="submit" className="sell-submit-btn">
                  Submit
                </button>
                <button type="button" className="sell-clear-btn">
                  Clear
                </button>
              </div>
              {/* {fieldsErrorStatus && (
                <p className="sell-error-txt">{fieldsErrorTxt}</p>
              )} */}
              {/* {showMsgStatus && (
                <div className={isSuccess ? 'success-txt' : 'failure-txt'}>
                  <p className="msg-txt">{showMsgTxt}</p>
                </div>
              )} */}
            </form>
            </div>
                    </div>
  );
};

export default AddProduct;
