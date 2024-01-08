'use client'
import Link from "next/link"
import { useSelector } from "react-redux"
import Search from "./Search"


const Header = () => {
  const {cart} = useSelector(store => store.cart)
  const cartCount = cart.reduce(( pre, cur ) => pre = pre + cur.count, 0)
  
  return (
    <div className="bg-blue-400 text-white flex justify-between items-center w-full opacity-90 py-3 px-5 sticky top-0 right-0">
      <Link href={'/'}>
        <div>
            Home
        </div>
      </Link>
      <Search />
      <Link href={'/cart'} >
        <div className=" px-2 flex cursor-pointer"> 
          Cart {cartCount ? 
          <div className="flex">
            ({cartCount})
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
          </div>  : ''
        }
        </div>
      </Link>
    </div>
  )
}

export default Header