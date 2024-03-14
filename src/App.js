import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import { v4 as uuid4 } from 'uuid';

import './App.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import ProductContext from './context/ProductContext'
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';
import ProductDetails from './components/ProductDetails';

class App extends Component {

  state = {
    productsList: [
      {
          "id": 1,
          "MobileName": "iPhone 13 Pro Max",
          "Cost": "130000",
          "Model": "A2643",
          "InStock": true,
          "Manufacturer": "Apple",
          "ReleaseYear": 2021
      },
      {
          "id": 2,
          "MobileName": "Samsung Galaxy S21",
          "Cost": "67000",
          "Model": "SM-G991U",
          "InStock": true,
          "Manufacturer": "Samsung",
          "ReleaseYear": 2021
      },
      {
          "id":3,
          "MobileName": "Google Pixel 6 Pro",
          "Cost": "72000",
          "Model": "GD1YQ",
          "InStock": true,
          "Manufacturer": "Google",
          "ReleaseYear": 2021
      },
      {
          "id": 4,
          "MobileName": "OnePlus 9 Pro",
          "Cost": "80100",
          "Model": "LE2110",
          "InStock": false,
          "Manufacturer": "OnePlus",
          "ReleaseYear": 2021
      },
      {
          "id": 5,
          "MobileName": "Xiaomi Mi 11 Ultra",
          "Cost": "90000",
          "Model": "M2102K1G",
          "InStock": true,
          "Manufacturer": "Xiaomi",
          "ReleaseYear": 2021
      },
      {
          "id": 6,
          "MobileName": "Huawei P50 Pro",
          "Cost": "$120000",
          "Model": "PREM-AN00",
          "InStock": false,
          "Manufacturer": "Huawei",
          "ReleaseYear": 2021
      },
      {
          "id": 7,
          "MobileName": "Sony Xperia 1 III",
          "Cost": "130000",
          "Model": "XQ-BC72",
          "InStock": true,
          "Manufacturer": "Sony",
          "ReleaseYear": 2021
      },
      {
          "id": 8,
          "Mobile Name": "LG Velvet 2 Pro",
          "Cost": "80000",
          "Model": "LM-V710EMW",
          "InStock": true,
          "Manufacturer": "LG",
          "ReleaseYear": 2021
      },
      {
          "id": 9,
          "MobileName": "Motorola Edge 20 Pro",
          "Cost": "85000",
          "Model": "XT2153-1",
          "InStock": true,
          "Manufacturer": "Motorola",
          "ReleaseYear": 2021
      },
      {
          "id": 10,
          "MobileName": "ASUS ROG Phone 5",
          "Cost": "86000",
          "Model": "ZS673KS",
          "InStock": false,
          "Manufacturer": "ASUS",
          "ReleaseYear": 2021
      }
  ],
  }

  addNewProduct = (mobileName,price,description,stackCount,model,manufacturedBy,releaseYear) => {
    const {productsList} = this.state
    const newProduct = {
          "id": productsList.length + 1,
          "MobileName": mobileName,
          "Cost": price,
          "Model": model,
          "InStock": stackCount,
          "Manufacturer": manufacturedBy,
          "ReleaseYear": releaseYear,
          "description": description}
   this.setState(prevState => ({productsList: [...prevState.productsList, newProduct]}))
  }

  render() {
    const productsList = this.state
    return (
      <ProductContext.Provider
      value={{
        productsList,
        addNewProduct: this.addNewProduct
      }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/products" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />}/>
        </Routes>
      </ProductContext.Provider>
    )
  }
}

export default App