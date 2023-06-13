import React from "react";
import { Footer, TopNavBar } from "../navigation";

type Props = {
  children: React.ReactNode;
};

// Wtaps major app components
const AppLayoutWrapper = ({ children }: Props) => {
  return (
    <div>
      <TopNavBar />
      <section className="mx-2 md:mx-auto max-w-screen-xl my-12 min-h-[80vh]">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default AppLayoutWrapper;
