import Image from "next/image"
import Link from "next/link"


const ProductCard = ({product}) => {
  return (
    <Link href={`/${product.category}/${product.name}`} style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign: 'center' ,border: '1px solid #000', borderRadius: 8, margin: 12, padding:24, cursor: 'pointer'}}>
        <div>
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <Image src={product.image} alt={product.name} width={100} style={{}} />
            </div>
            <div>
                {product.name}
            </div>
            <div>
                {product.price}
            </div>
        </div>
    </Link>
    
  )
}

export default ProductCard