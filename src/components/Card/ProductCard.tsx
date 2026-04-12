import Image from "next/image";

export type Product = {
  id: number;
  product_name: string;
  category: string;
  brand: string;
  price: number;
  img: string;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <div className="w-full h-48 relative mb-3">
        {/* <Image
          src={product.img}
          alt={product.product_name}
          fill
          className="object-cover rounded-lg"
        /> */}
      </div>

      <h2 className="text-lg font-semibold">{product.product_name}</h2>

      <p className="text-sm text-gray-500">
        {product.brand} • {product.category}
      </p>

      <p className="text-xl font-bold mt-2 text-indigo-600">${product.price}</p>

      <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
