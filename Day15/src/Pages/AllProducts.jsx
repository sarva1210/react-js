import { useProduct } from "../context/product/index.js";
import { Loader, ProductCard } from "../components/index.js";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { products, loading, error } = useProduct();

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="text-center text-red-500 dark:text-red-400">{error}</p>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 px-6 py-10">
      {/* Page Title */}
      <h1 className="mb-8 text-center text-2xl font-semibold text-gray-800 dark:text-zinc-100">
        All Products
      </h1>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard products={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;