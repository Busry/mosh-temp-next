'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button className='btn btn-primary' onClick={()=>{console.log("clicked add to cart")}}><h5>Add to Cart</h5></button>
    </div>
  )
}

export default AddToCart
