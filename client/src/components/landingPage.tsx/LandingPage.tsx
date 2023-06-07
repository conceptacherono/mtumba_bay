import ProductCategories from "./productCategories";
import Hero from "./Hero";
import BestDeals from "./BestDeals";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <BestDeals />
      {/* <h2>Application&apos;s landing page</h2> */}
    </div>
  );
};

export default LandingPage;
