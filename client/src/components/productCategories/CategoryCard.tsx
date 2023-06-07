import { ProductCategoryType } from "../../interfaces/ProductCategory";

type CategoryCardProps = {
  category: ProductCategoryType;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="relative flex-1 rounded-lg overflow-hidden mt-4 h-64 group">
      <div className="absolute h-full w-full bg-black bg-opacity-40" />
      <h3 className="text-xl font-[600] text-white mt-8 absolute text-center left-auto right-auto w-full text-[26px]">
        {category.name}
      </h3>
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover hover:scale-150 hover:cursor-pointer"
      />

      <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-darkGreen opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
        <h1 className="text-2xl text-white">{category.name}</h1>
        <a
          className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
          href="#"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
