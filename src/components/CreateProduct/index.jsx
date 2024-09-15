import axios from "axios";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const { product, setProduct } = useContext(ProductContext);
  async function PostCretaeProduct() {
    let pro = {
      name: name,
      price: price,
      url: url,
    };
    let res = await axios.post(
      `https://api.elchocrud.pro/api/v1/76c97cef157f36b19c870f5b394a5dcc/vite`,
      pro
    );
    let { data } = res;
    setProduct(data);
  }
  console.log(product);
  return (
    <div>
      <div className="container">
        <div className="input">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Url"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Price"
          />
          <button onClick={() => PostCretaeProduct()}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
