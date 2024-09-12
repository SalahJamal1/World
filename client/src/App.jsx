import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

import Loading from "./ui/Loading";
import Pagenotfound from "./pages/Pagenotfound";
import CitiesContext from "./context/CitiesContext";
import Cities from "./features/app/Cities";
import Form from "./features/app/Form";
import Countries from "./features/app/Countries";
import CityName from "./features/app/CityName";
import ProtectPage from "./pages/ProtectPage";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Suspense fallback={<Loading />}>
        <CitiesContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Pagenotfound />} />

            <Route
              path="app"
              element={
                <ProtectPage>
                  <AppLayout />
                </ProtectPage>
              }
            >
              <Route path="countries" element={<Countries />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<CityName />} />
              <Route path="form" element={<Form />} />
              <Route index element={<Navigate replace to="cities" />} />
            </Route>
          </Routes>
        </CitiesContext>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
