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
    releaseYear: '',
    Category: ''
  });

  const { Name,Price, Description, InStack, Model, manufacturedBy, ReleaseYear, Category } = formData;

  const handleChange = (e) => {
    console.log(e.target.name)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming addNewProduct is an asynchronous function
    // const { mobileName, price, description, stackCount, model, manufacturedBy, releaseYear } = formData;
    // console.log(formData)

    console.log(formData)

    await addNewProduct(Name,Price, Description, InStack, Model, manufacturedBy, ReleaseYear, Category);
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
                Name: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={handleChange} name='Name'
              />
              <label htmlFor="titleInput" className="sell-label">
                Price: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={handleChange} name='Price'
              />

            <label htmlFor="titleInput" className="sell-label">
                Category: <span className="sell-star-txt">*</span>
              </label>
              <select id="category" name="Category" className="sell-input" onChange={handleChange}>
            <option value="">Select category</option>
            <option value="groceries">Groceries</option>
            <option value="electronics">Electronics</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
          </select>


              <label htmlFor="descInput" className="sell-label">
                Count in Stock: <span className="sell-star-txt">*</span>
              </label>
              <textarea
                type="text"
                id="descInput"
                className="sell-input"
                onChange={handleChange} name='InStock'
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
                onChange={handleChange} name='Description'
              />
              <label htmlFor="isbnInput" className="sell-label">
              Manufactured By: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="isbnInput"
                className="sell-input"
                onChange={handleChange} name='Manufacturer'
              />
              <label htmlFor="printedInput" className="sell-label">
                Model: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="printedInput"
                className="sell-input"
                onChange={handleChange} name='Model'
              />
              <label htmlFor="sellingInput" className="sell-label">
                Release Year: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="sellingInput"
                className="sell-input"
                onChange={handleChange} name='ReleaseYear'
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
