import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
export default AppRoutes;
