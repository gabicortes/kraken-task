import { useEffect, useState } from "react";
import { getProductInfo } from "../apiCall";
import { Navbar } from "../components/NavBar";
import { ProductPrice } from "../components/ProductPrice";
import { TableSection } from "../components/TableSection";
import { TextSection } from "../components/TextSection";

export default function Product() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const result = await getProductInfo();
      setProduct(result);
    };
    getProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const specifications = [
    { attribute: "Brand", value: product.brand },
    { attribute: "Item weight", value: product.weight },
    {
      attribute: "Dimensions",
      value: `${product.height} x ${product.width} x ${product.length}`,
    },
    { attribute: "Item Model Number", value: product.model_code },
    { attribute: "Colour", value: product.colour },
  ];

  return (
    <>
      <Navbar />
      <ProductPrice product={product} />
      <TextSection title="Description" text={product.description} highlighted />
      <TableSection title="Specifications" table={specifications} />
    </>
  );
}
