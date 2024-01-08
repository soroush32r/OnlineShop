import Image from "next/image"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { addToCart, decreaseItem, deleteItem } from "../redux/cartSlice"

const CartItem = ({product}) => {
  const {name, image, count, id} = product
  const dispatch = useDispatch()

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product))
  }, [])

  const handleDecreaseFromCart = useCallback(() => {
    dispatch(decreaseItem(id))
  }, [])

  const handleRemoveItem = useCallback(() => {
    dispatch(deleteItem(id))
  })

  return (
      <div>
          <div className="py-2">
              {name}
          </div>
          <div style={{height:'200px'}}>
              <Image src={image} alt={name} width={200} className="h-full rounded-lg shadow-md" />
          </div>
          <div className="pt-5 flex justify-center">
            {count > 1 ?
              <button className="mx-2 w-6 bg-gray-200 rounded shadow hover:bg-gray-300" onClick={handleDecreaseFromCart}>-</button> 
              :
              <button className="mx-2 w-6 bg-gray-200 rounded shadow hover:bg-gray-300 flex justify-center items-center" onClick={handleRemoveItem}>
                <span className ="material-symbols-outlined text-red-600">delete</span>
              </button>
          }
              
                Count: {count}
              <button className="mx-2 w-6 bg-gray-300 rounded shadow hover:bg-gray-200" onClick={handleAddToCart}>+</button>
          </div>
      </div>
  )

}


export default CartItem