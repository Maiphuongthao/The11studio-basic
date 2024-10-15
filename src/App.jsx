import {
  NavBar,
  Footer,
  HomePage,
  ErrorPage,
  ServicePage,
  PricePage,
  StudioPage,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
          <Route
            path="/services/:serviceId"
            element={<ServicePage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/price"
            element={<PricePage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/studio"
            element={<StudioPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
