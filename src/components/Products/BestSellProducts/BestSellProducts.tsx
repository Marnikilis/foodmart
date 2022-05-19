import React from 'react';
import amber from '../ProductCard/productImg/amber.png';
import cashew from '../ProductCard/productImg/cashew.png';
import cupcake from "../ProductCard/productImg/cupcake.png";
import milk from '../ProductCard/productImg/milk.png';
import ketchup from "../ProductCard/productImg/ketchup.png";
import avocado from "../ProductCard/productImg/avocado.png";
import ProductCarousel from "../ProductCarousel/ProductCarousel";


const bestSellProducts = [
  {img: amber, title: 'Amber pure honey', quantity: '1 unit', rating: '4.5', price: '$18.00'},
  {img: avocado, title: 'Local Avocado', quantity: '1 kg', rating: '3.5', price: '$10.00'},
  {img: cashew, title: 'Pharma Cashew butter', quantity: '1 unit', rating: '4.5', price: '$19.00'},
  {img: milk, title: 'Pure Dairy milk ', quantity: '1 unit', rating: '5.0', price: '$8.00'},
  {img: cupcake, title: 'Suzane creamy Cupcake', quantity: '1 unit', rating: '3.5', price: '$14.00'},
  {img: amber, title: 'Amber pure honey', quantity: '1 unit', rating: '4.5', price: '$18.00'},
  {img: avocado, title: 'Local Avocado', quantity: '1 kg', rating: '3.5', price: '$10.00'},
  {img: cashew, title: 'Pharma Cashew butter', quantity: '1 unit', rating: '4.5', price: '$19.00'},
  {img: milk, title: 'Pure Dairy milk ', quantity: '1 unit', rating: '5.0', price: '$8.00'},
  {img: ketchup, title: 'Heinz tomato ketchup', quantity: '1 unit', rating: '5.0', price: '$9.00'},
  {img: cupcake, title: 'Suzane creamy Cupcake', quantity: '1 unit', rating: '3.5', price: '$14.00'},
];

const BestSellProducts = () => {

  return (
    <ProductCarousel
      products={bestSellProducts}
      heading={'Best selling products'}/>
  );
};


export default BestSellProducts;