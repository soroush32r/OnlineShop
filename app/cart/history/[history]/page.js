'use client'

import { findByHistory } from "@/app/utils/findByHistory"
import Image from "next/image"
import { useSelector } from "react-redux"


const Page = ({params}) => {
  const historyId = +params.history
  const [user1] = useSelector(store => store.history)
  const cartHistory = findByHistory(user1, historyId)
  const productsItem = cartHistory.items
  const totalPrice = cartHistory.totalPrice
  return (
    <div className="h-full md:mt-20 flex justify-center items-center md:bg-white bg-blue-50">
      <div className="flex flex-col md:w-auto md:p-10 md:shadow-lg md:rounded-md md:bg-blue-50 items-center">
        <div className="my-2">
          <h3>History Id: {historyId}</h3>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center text-center gap-5 items-center ">
          {productsItem.map(({name, image, price, count}) => (
            <div>
                <div className="py-2">
                  {name}
                </div>
                <div style={{height:'200px'}}>
                    <Image src={image} alt={name} width={200} className="h-full rounded-lg shadow-md" />
                </div>
                <div className="pt-5 flex justify-center">    
                    Count: {count}
                </div>
                <div className="pt-5 flex justify-center">    
                    Price: {price}
                </div>
            </div>
          ))} 
        </div>
        <div className="mt-10">
            Total Price: {totalPrice}
        </div>
      </div>
    </div>
  )
}

export default Page