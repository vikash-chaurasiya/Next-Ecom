"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {


  const data = useSelector((state) => state.cart);

  console.log("this is card data",data)

  return (
    <>

    </>
  )
}

export default Cart