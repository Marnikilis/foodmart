import React from "react";
import juiceMelon from "../ProductCard/productImg/juiceMelon.png";
import beans from "../ProductCard/productImg/beans.png";
import cider from "../ProductCard/productImg/cider.png";
import grapes from "../ProductCard/productImg/grapes.png";
import ketchup from "../ProductCard/productImg/ketchup.png";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const landedProducts = [
  {
    img: beans,
    title: "Jelly beans exxotics",
    quantity: "1 unit",
    rating: "4.5",
    price: "$18.00",
  },
  {
    img: cider,
    title: "Growers cider",
    quantity: "1 unit",
    rating: "4.0",
    price: "$5.00",
  },
  {
    img: grapes,
    title: "Fresh grapes",
    quantity: "1 kg",
    rating: "4.5",
    price: "$6.00",
  },
  {
    img: ketchup,
    title: "Heinz tomato ketchup",
    quantity: "1 unit",
    rating: "5.0",
    price: "$9.00",
  },
  {
    img: juiceMelon,
    title: "Sunstar Fresh Melon Juice",
    quantity: "1 unit",
    rating: "3.5",
    price: "$12.00",
  },
  {
    img: beans,
    title: "Jelly beans exxotics",
    quantity: "1 unit",
    rating: "4.5",
    price: "$18.00",
  },
  {
    img: cider,
    title: "Growers cider",
    quantity: "1 unit",
    rating: "4.0",
    price: "$5.00",
  },
  {
    img: grapes,
    title: "Fresh grapes",
    quantity: "1 kg",
    rating: "4.5",
    price: "$6.00",
  },
  {
    img: ketchup,
    title: "Heinz tomato ketchup",
    quantity: "1 unit",
    rating: "5.0",
    price: "$9.00",
  },
  {
    img: juiceMelon,
    title: "Sunstar Fresh Melon Juice",
    quantity: "1 unit",
    rating: "3.5",
    price: "$12.00",
  },
];

const LandedItems = () => {
  return (
    <ProductCarousel products={landedProducts} heading={"Just landed items"} />
  );
};

export default LandedItems;
