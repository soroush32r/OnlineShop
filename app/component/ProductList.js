import Link from "next/link"
import ProductCard from "./ProductCard"

const ProductList = ({ category, products }) => {
  return (
    <div className="py-2">
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h2>
          {category}
        </h2>
        <Link href={`/${category}`} >
          <h6>
            See All
          </h6>
        </Link>
      </div>
      <div style={{display: "flex"}}>
        {products.map( product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
   </div>
  )
}

export default ProductList