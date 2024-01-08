import Link from "next/link"
import ProductCard from "../component/ProductCard"
import { PRODUCTS } from "../data/database"
import { filterByCategory } from "../utils/filterByCategory"

const Page = ({params}) => {
  const category = params.category
  const CATEGORY_PRODUCTS = filterByCategory(category)
  const isEmptyProducts = CATEGORY_PRODUCTS.length === 0

  if (isEmptyProducts) {
    return (
      <Link href={`/`}>
        <div className="h-screen flex justify-center items-center">
          <p className="p-2 rounded-xl transition ease-in-out delay-150 text-white bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 hover:text-black duration-300" style={{fontSize:'1.5rem'}}>
            This category doesn't any product back to the home
          </p>
        </div>
      </Link>
    )
  }

  return (
    <div>
      {CATEGORY_PRODUCTS.map(product => <ProductCard key={product.id} product={product}/> )}
    </div>
  )
}

export default Page