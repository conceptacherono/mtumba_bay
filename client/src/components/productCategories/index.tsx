import { Mens, Travel1, Clothing, Sneakers, Travel2, Tech } from "../../assets";
import { ProductCategoryType } from "../../interfaces/ProductCategory";
import CategoryCard from "./CategoryCard";

const ProductCategories = () => {
  return (
    <section className="py-24">
      <h2 className="font-[500] text-2xl">Shop our top categories</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {productCategoryData.map((category) => (
          <CategoryCard key={category.index} category={category} />
        ))}
      </div>
    </section>
  );
};

const productCategoryData: ProductCategoryType[] = [
  {
    index: 1,
    name: "Clothing",
    image: Clothing,
  },
  {
    index: 2,
    name: "Sneakers",
    image: Sneakers,
  },
  {
    index: 3,
    name: "Travel",
    image: Travel1,
  },
  {
    index: 4,
    name: "Tech",
    image: Tech,
  },
  {
    index: 4,
    name: "Men",
    image: Mens,
  },
];

export default ProductCategories;
