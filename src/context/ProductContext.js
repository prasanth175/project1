import React from 'react'

const ProductContext = React.createContext({
  productsList: [],
  // removeAllCartItems: () => {},
  addNewProduct: () => {},
  // removeProduct: () => {},
  // incrementCartItemQuantity: () => {},
  // decrementCartItemQuantity: () => {},
})

export default ProductContext
