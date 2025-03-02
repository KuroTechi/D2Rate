import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import ErrorBoundary from "../../utils/ErrorBoundary";

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
