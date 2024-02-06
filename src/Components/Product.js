import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Product = () => {
  const products = useSelector((state) => state.allProducts.products)

/*   console.log(products) */

  const renderList = products.map((product)=>{

    const {id,title,image,price,catagory} = product
   return (<div className = 'four column wide' key={id}>
    <Link to={`/product/${id}`}>
        <div className='ui link cards'>

        <div className='card'>
            <div className='image'> 
            <img src={image} alt={title} />
            </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>$ {catagory}</div>
              </div>
          </div>
        </div>
        </Link>
      </div >)

  })

 /*  const { title } = products[0] */

  return (
    <>{renderList}</>
  )
}

export default Product