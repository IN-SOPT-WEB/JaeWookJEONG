import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Header />}>
          <Route path=":username" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
