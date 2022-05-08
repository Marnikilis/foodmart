import React from 'react';
import Billboard from "./Billboard/Billboard";
import Category from "./Category/Category";
import Brands from "./Brands/Brands";
import TrendingProducts from "./Products/TrendingProducts/TrendingProducts";
import Banners from "./Banners/Banners";
import TopProducts from "./Products/TopProducts/TopProducts";
import RegisterForm from "../containers/RegisterForm/RegisterForm";
import BestSellProducts from "./Products/BestSellProducts/BestSellProducts";
import LandedItems from "./Products/LandedItems/LandedItems";
import Articles from "./Articles/Articles";
import FoodMartApp from "./FoodMartApp/FoodMartApp";
import PopularProducts from "./PopularProducts/PopularProducts";
import Services from "./Services/Services";

const Main = () => {
  return (
    <>
      <Billboard/>
      <Category/>
      <Brands/>
      <TrendingProducts/>
      <Banners/>
      <TopProducts/>
      <RegisterForm/>
      <BestSellProducts/>
      <LandedItems/>
      <Articles/>
      <FoodMartApp/>
      <PopularProducts/>
      <Services/>
    </>
  );
};

export default Main;