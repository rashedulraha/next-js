import ProductCard, { Product } from "@/components/Card/ProductCard";

const AllProductsPage = async () => {
  const response = await fetch("http://localhost:5000/products");
  const result = await response.json();
  console.log(result);

  return (
    <div>
      <h1 className="text-4xl font-bold"> All product data</h1>

      {/*  product section */}

      <div className="grid grid-cols-3 gap-2">
        {result.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
