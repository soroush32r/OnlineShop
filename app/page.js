import ProductList from "./component/ProductList";
import { FRUITS, PRODUCTS, VEGETABLES } from "./data/database";
import { filterByCategory } from "./utils/filterByCategory";

export default function Home() {

  const FRUITS_PRODUCTS = filterByCategory(FRUITS)
  const VEGETABLES_PRODUCTS = filterByCategory(VEGETABLES)
  return (
    <div className="p-10">
      <ProductList category={FRUITS} products={FRUITS_PRODUCTS} />
      <ProductList category={VEGETABLES} products={VEGETABLES_PRODUCTS} />
    </div>
  )
}
