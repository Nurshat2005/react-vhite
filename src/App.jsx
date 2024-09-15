import React from "react";
import Header from "./components/Header";
import CreateProduct from "./components/CreateProduct";
import ProductCard from "./components/ProductCard";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const router = [
    {
      id: 1,
      link: "/",
      elment: <Home />,
    },
    {
      id: 2,
      link: "/create",
      elment: <CreateProduct />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
      {
        router.map((el)=>(

        <Route element={el.elment} key={el.id} path={el.link}/>
        ))
      }
      </Routes>
    </>
  );
};

export default App;
