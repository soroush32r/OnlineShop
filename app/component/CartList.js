'use client'
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { reset } from "../redux/cartSlice"
import calculateShoppingCart from "../utils/calculateShoppingCart"
import { useCallback, useMemo } from "react"
import { addToHistory } from "../redux/historySlice"

const CartList = () => {
  const {cart} = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const handleResetCart = useCallback(() => {
    dispatch(reset())
  }, [])

  const totalPrice = useMemo(() => calculateShoppingCart(cart), [cart]) 

  const handleCheckout = useCallback(() => {
    dispatch(addToHistory({userId: 1, items: cart, totalPrice}))
    dispatch(reset())
  }, [totalPrice ,cart])

  if (cart.length === 0 ) {
    return(
    <div className="flex justify-center w-full items-center bg-blue-100 md:bg-white flex-wrap  pt-10">
      <div className="flex flex-col w-full md:w-auto justify-center text-center items-center gap-5 md:rounded-md md:shadow-lg md:p-10 md:flex-row md:bg-blue-100">
      There is nothing in the cart
      </div>
    </div>

    )
  }

  return (
    <div className="flex flex-col h-full md:w-auto md:p-10 md:shadow-lg md:rounded-md md:bg-blue-100 items-center">
      <div className="flex flex-col md:flex-row w-full justify-center text-center gap-5 items-center  ">
        {cart.map((product) => (
          <CartItem key={product.id} product={product}/>
        ))} 
      </div>
      <div className="w-full flex-col items-center text-center justify-center mt-5">
        <div className="my-5">
          Total Price: {totalPrice}
        </div>
        <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-400 shadow-md hover:scale-90 ease-in-out transition" onClick={handleResetCart}>reset</button>
      </div>
      <div className="flex w-full">
        <button className="mt-5 py-2 rounded-md w-full text-white bg-green-500 hover:bg-green-600 hover:scale-105 ease-in-out transition" onClick={handleCheckout}> check out </button>
      </div>
    </div>
  )
}

export default CartList