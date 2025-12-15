import { SearchBox } from "../components/SearchBox"

export default async function ProductsPage() {
  // const products = await getProducts()
  
  return (
    <div>
      {/* ✅ Client Component trong Server Component */}
      <SearchBox />
      
      {/* ✅ Server Component khác */}
      {/* <ProductList products={products} /> */}
    </div>
  )
}