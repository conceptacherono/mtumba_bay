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
      <section className="mx-auto max-w-screen-xl py-12 min-h-screen">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default AppLayoutWrapper;
