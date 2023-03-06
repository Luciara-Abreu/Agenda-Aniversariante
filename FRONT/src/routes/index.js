import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";

export const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

