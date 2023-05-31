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
      {children}
      <Footer />
    </div>
  );
};

export default AppLayoutWrapper;
