import { useProduct } from "../context/product/index.js";
import { useParams } from "react-router-dom";
import { Loader } from "../components/index.js";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProduct();

  if (loading) return <Loader />;

  if (error)
    return (
      <p className="mt-10 text-center text-red-500 dark:text-red-400">
        {error}
      </p>
    );

  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 px-4">
        <div className="rounded-2xl bg-white dark:bg-zinc-900  text-center shadow-lg max-w-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-zinc-100">
            Product Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
            The product you’re looking for doesn’t exist or may have been
            removed.
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 py-3">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="flex items-center justify-center rounded-xl bg-gray-100 dark:bg-zinc-800 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">
              {product.title}
            </h1>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
              {product.description}
            </p>

            <p className="mt-4 text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              ₹ {product.price}
            </p>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button className=" flex-1 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition ">
                Add to Cart
              </button>

              <button
                className=" flex-1 rounded-xl border border-gray-300 dark:border-zinc-700 px-6 py-3 text-gray-800 dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;