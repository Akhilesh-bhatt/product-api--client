import { useContext } from "react"
import ProductContext from "../../context/ProductContext"
import ProductItem from "./ProductItem"
import Spinner from "../layout/Spinner"

function ProductResult() {
  const {products, loading} = useContext(ProductContext)

  if (loading) {
    return <Spinner />
  }
  
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {products.map((product, key) => (
        <ProductItem key={key} product={product} />
      ))}
    </div>
  )
}

export default ProductResult