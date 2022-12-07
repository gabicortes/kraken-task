import { useEffect, useState } from "react";
import { getProductInfo } from "../apiCall";
import { Navbar } from "../components/NavBar";
import { ProductPrice } from "../components/ProductPrice";
import { Description } from "../components/Description";
import { Specifications } from "../components/Specifications";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await getProductInfo();
      setProducts(result);
    };
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Navbar />
      <ProductPrice product={products[0]} />
      <Description product={products[0]} />
      <Specifications product={products[0]} />
    </>
  );
}
