'use client'
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"

const AddButton = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product))
  }, [])
  return (
    <button
      onClick={handleAddToCart} 
      className="border border-black rounded p-2 m-2 hover:bg-black hover:text-white ">
        ADD TO CARD
    </button>
  )
}


export default AddButton