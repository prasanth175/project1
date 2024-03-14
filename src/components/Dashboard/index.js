import React from "react";
import { Component } from 'react';
import "./index.css"
import SideNavbar from "../SideNavbar"

const products = [
  {
    productName: "Wireless Headphones",
    category: "Electronics",
    price: 1299.00,
    availableStock: 20,
  },
  {
    productName: "Cotton T-Shirt (M)",
    category: "Clothes",
    price: 349.00,
    availableStock: 50,
  },
  {
    productName: "Laptop Backpack",
    category: "Electronics",
    price: 849.00,
    availableStock: 15,
  },
  {
    productName: "Running Shoes (Size 8)",
    category: "Clothes",
    price: 1999.00,
    availableStock: 10,
  },
  {
    productName: "Smartwatch",
    category: "Electronics",
    price: 4999.00,
    availableStock: 3,
  },
  {
    productName: "Denim Jeans (Size 30)",
    category: "Clothes",
    price: 799.00,
    availableStock: 25,
  },
  {
    productName: "Wireless Keyboard",
    category: "Electronics",
    price: 999.00,
    availableStock: 8,
  },
  {
    productName: "Cotton Dress (S)",
    category: "Clothes",
    price: 549.00,
    availableStock: 42,
  },
  {
    productName: "Gaming Mouse",
    category: "Electronics",
    price: 1499.00,
    availableStock: 12,
  },
  {
    productName: "Formal Shirt (L)",
    category: "Clothes",
    price: 899.00,
    availableStock: 18,
  },
];

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard-container">
            <SideNavbar />
            <div className="dashboard-sub-container">
                <h1 className="dashboard-heading">Dashboard Overview</h1>
                <div className="dash-bg-container">
                    <ul className="dashboard-cards">
                        <li className="card card-1">
                            <p className="card-heading">Total Products</p>
                            <p className="total-count">150</p>
                        </li>
                        <li className="card card-2">
                            <p className="card-heading">Orders Today</p>
                            <p className="total-count">150</p>
                        </li>
                        <li className="card card-3">
                            <p className="card-heading">Pending Shipments</p>
                            <p className="total-count">150</p>
                        </li>
                    </ul>
                    <div className="products-management">
                    <div className="heading-and-button-container">
                        <h1 className="products-managment-heading">Products Management</h1>
                        <button className="add-product-btn">Add New Product</button>
                    </div>
                   
                    <table className="products-table">
                        <thead>
                        <tr>
                            <th className="table-header">PRODUCT NAME</th>
                            <th className="table-header">CATEGORY</th>
                            <th className="table-header">PRICE</th>
                            <th className="table-header">STOCK</th>
                        </tr>
                        </thead>
                        <tbody>
                            {products.map((eachProduct) => (
                            <tr key={eachProduct.productName}>
                                <td>{eachProduct.productName}</td>
                                <td>{eachProduct.category}</td>
                                <td>{eachProduct.availableStock}</td>
                                <td>{eachProduct.price}/-</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </div>
                
        )
    }
}

export default Dashboard