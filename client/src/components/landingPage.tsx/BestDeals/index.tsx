import { ProductType } from "../../../interfaces/Product";
import { useGetProductsQuery } from "../../../services/productsApi";

const BestDeals = () => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetProductsQuery();

  console.log(data);

  return (
    <section className="pt-16">
      <h2 className="font-[500] text-2xl">Today's best deals for you</h2>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Something went wrong </h2>}
      {isSuccess && (
        <div>
          {data.map((product) => (
            <div key={product.id}>
              <h2>{product.id}</h2>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BestDeals;
