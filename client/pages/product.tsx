import { useEffect, useMemo, useState } from "react";
import { getProductInfo } from "../apiCall";
import { Navbar } from "../components/NavBar";
import { ProductPrice } from "../components/ProductPrice";
import { TableSection } from "../components/TableSection";
import { TextSection } from "../components/TextSection";
import { Footer } from "../components/Footer";
import { ProductType } from "../types";

const INITIAL_PRODUCT: ProductType = {
  name: "",
  brand: "",
  colour: "",
  description: "",
  height: 0,
  img_url: "",
  length: 0,
  model_code: "",
  power: "",
  price: 0,
  quantity: 0,
  weight: 0,
  width: 0,
};

export default function Product() {
  const [product, setProduct] = useState<ProductType>(INITIAL_PRODUCT);
  const [itemsInCart, setItemsInCart] = useState<number>(0);

  useEffect(() => {
    const getProduct = async () => {
      const result = await getProductInfo();
      setProduct(result);
    };
    getProduct();
  }, []);

  const specifications = useMemo(() => {
    return [
      { attribute: "Brand", value: product.brand },
      { attribute: "Item weight", value: product.weight },
      {
        attribute: "Dimensions",
        value: `${product.height} x ${product.width} x ${product.length}`,
      },
      { attribute: "Item Model Number", value: product.model_code },
      { attribute: "Colour", value: product.colour },
    ];
  }, [product]);

  return (
    <>
      <Navbar itemsInCart={itemsInCart} />
      <ProductPrice
        product={product}
        setItemsInCart={setItemsInCart}
        itemsInCart={itemsInCart}
      />
      <TextSection title="Description" text={product.description} highlighted />
      <TableSection title="Specifications" specifications={specifications} />
      <Footer highlighted />
    </>
  );
}
