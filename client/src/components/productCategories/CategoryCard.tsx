import { ProductCategoryType } from "../../interfaces/ProductCategory";

type CategoryCardProps = {
  category: ProductCategoryType;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="relative flex-1 rounded-xl overflow-hidden mt-4 group-hover:scale-125">
      <div className="absolute h-full w-full bg-black bg-opacity-40" />
      <h3 className="text-xl font-[600] text-white mt-8 absolute text-center left-auto right-auto w-full text-[24px]">
        {category.name}
      </h3>
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover hover:scale-150 hover:cursor-pointer"
      />
    </div>
  );
};

export default CategoryCard;
