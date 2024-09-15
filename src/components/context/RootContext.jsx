import React, { useState } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
