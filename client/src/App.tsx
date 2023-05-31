import { Outlet } from "react-router-dom";
import { AppLayoutWrapper } from "./layouts";

function App() {
  return (
    <>
      <AppLayoutWrapper>
        <Outlet />
      </AppLayoutWrapper>
    </>
  );
}

export default App;
