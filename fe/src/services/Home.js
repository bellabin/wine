import React, { useState, useEffect } from 'react'
import { GetListProduct } from '../../services/Product'

export default function Product() {
  //Goi api -> show data len tren giao dien
  //1. Goi API get list products
  const [listProducts, setListProducts] = useState([])

  //demo cach goi api
  useEffect(() => {
    async function fetchListProducts () {
      const products = (await GetListProduct()).data

      setListProducts(products)
    }
    
    fetchListProducts()
  }, [listProducts])

  //thay vi thang kia dung the <% %>
  //thay = {product.MADONG}

  const Card = (product) => {
    return (
      <div>
        <p>Ma dong {product.MADONG}</p>
        <p>Ten dong {product.TENDONG}</p> 
      </div>
    )
  }

  return (
    <div>
      {
        listProducts && listProducts.length && listProducts.map(product => Card(product))
      }
    </div>
  )
}
