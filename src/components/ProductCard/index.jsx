import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context";
import axios from "axios";

const ProductCard = () => {
  const { product, setProduct } = useContext(ProductContext);
  let token=product.map((el)=>el._id)
  async function GetPro() {
    let res = await axios.get(
      `https://api.elchocrud.pro/api/v1/76c97cef157f36b19c870f5b394a5dcc/vite`
    );
    let { data } = res;
    setProduct(data);
  }
  async function DeletPro() {
    let res = await axios.delete(
      `https://api.elchocrud.pro/api/v1/76c97cef157f36b19c870f5b394a5dcc/vite`
    );
    GetPro();
  }
  async function PatchProduct() {
    let res = await axios.patch(
      `https://api.elchocrud.pro/api/v1/76c97cef157f36b19c870f5b394a5dcc/vite/${token}`,{
        name:"asylbek"
      }
    );
    let { data } = res;
    GetPro();
  }

  useEffect(() => {
    GetPro();
  }, []);
  return (
    <>
      {product.map((el) => (
        <div className="card" >
          <h1 onClick={() => DeletPro()} className="x">
            X
          </h1>

          <img width={300} src={el.url} alt="img" />
          <h1>{el.name}</h1>
          <h2>{el.price}$</h2>
          <button
          onClick={()=>PatchProduct()}
          >Upload</button>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
