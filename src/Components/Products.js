import React,{ useEffect } from 'react'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'

const Products = () => {
  const products = useSelector((state)=>state.allProducts/*.Products */)
  const dispatch = useDispatch();


  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log("err ",err);
    })
   dispatch(setProducts(response.data))
  }

  useEffect(() => {
   fetchProducts();
  }, [])

  console.log(products,"products")
  
  return (
    <div className='ui grid container'>
        <h1><Product/></h1>
    </div>
  )
}

export default Products