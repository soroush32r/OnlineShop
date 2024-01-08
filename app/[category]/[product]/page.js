import AddButton from "@/app/component/AddButton"
import ProductCard from "@/app/component/ProductCard"
import { filterByProduct } from "@/app/utils/filterByProduct"
import Image from "next/image"
import Link from "next/link"

const Page = ({params}) => {
  const productName = params.product
  const product = filterByProduct(productName)
  const isNotFoundProduct = product === undefined
  if (isNotFoundProduct) {
    return (
      <Link href={`/`}>
        <div className="h-screen flex justify-center items-center">
          <p className="p-2 rounded-xl transition ease-in-out delay-150 text-white bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 hover:text-black duration-300" style={{fontSize:'1.5rem'}}>
            Not found 404 back to Home
          </p>
        </div>
      </Link>
    )
  }

  const {name, category, price, image} = product
  
  return(
    <div className="bg-blue-100 md:bg-white h-screen md:h-[90vh] flex flex-col justify-center items-center">
      <div className="md:bg-blue-100 md:rounded-2xl p-5 md:shadow-2xl flex flex-col text-center">
          <h1 className="py-5">
            {name}
          </h1>
          <Image src={image} alt={name} width={300} className="rounded-2xl" />
          <h3 className="py-2">
            category: {category}
          </h3>
          <h5 className="py-3">
            {price} $
          </h5>
          <AddButton product={product} />
      </div>
    </div>
  )
}

export default Page