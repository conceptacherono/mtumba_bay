import React from "react";
import ProductCard from "../../../lib/ui/ProductCard";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../../services/productsApi";

const BestDeals = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetProductsQuery();
  const { data: categories, isLoading: loadingCategories } =
    useGetCategoriesQuery();

  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  return (
    <section className="pt-16">
      <h2 className="font-[500] py-4 text-2xl">Today's best deals for you</h2>
      <div className="flex gap-2 lg:gap-4 flex-wrap ">
        <div
          className={`px-8 py-2 border transition rounded-full border-black cursor-pointer mb-2 lg:mb-8 ${
            activeCategory === "all" &&
            "bg-darkGreen border-darkGreen text-white"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </div>
        {categories?.map((category, index) => (
          <div
            key={index}
            className={`px-4 py-2 transition border rounded-full border-black cursor-pointer mb-2 lg:mb-8 ${
              activeCategory === category &&
              "bg-darkGreen border-darkGreen text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      {isLoading && loadingCategories && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Something went wrong </h2>}
      {isSuccess && (
        <div className="grid-layout-listings gap-6 mt-4">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BestDeals;
