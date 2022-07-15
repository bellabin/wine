import React, { useState, useEffect } from 'react'
import { GetListProduct } from '../../services/Product'

export default function Product() {
  //Goi api -> show data len tren giao dien
  //1. Goi API get list products
  const [listProducts, setListProducts] = useState([])

  useEffect(async () => {
    const products = await GetListProduct()
    console.log(products)
    setListProducts(products)
  }, [])

  return (
    <div>
      {
        listProducts && listProducts.length && listProducts.map(product => <h1>{product.MADONG}</h1>)
      }
    </div>
  )
}
