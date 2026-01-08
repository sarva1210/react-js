const ProductCard = ({ products }) => {
  return (
    <div className="group w-full max-w-xs rounded-2xl  bg-white dark:bg-zinc-900  shadow-md dark:shadow-zinc-800/50 hover:shadow-xl transition-shadow duration-300 overflow-hidden" >
      {/* Image */}
      <div className="relative h-56 w-full bg-gray-100 dark:bg-zinc-800 overflow-hidden">
        <img src={products.image} alt={products.title} className="h-full w-full object-contain p-4  group-hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm font-medium  text-gray-800 dark:text-zinc-100  line-clamp-2">
          {products.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-semibold  text-indigo-600 dark:text-indigo-400">
            ₹ {products.price}
          </p>

          <button className=" rounded-xl px-4 py-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;