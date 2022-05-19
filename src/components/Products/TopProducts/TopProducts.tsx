import React from 'react';
import barista from './topProductsImg/barista.png';
import kombucha from './topProductsImg/kombucha.png';
import lays from './topProductsImg/lays.png';
import oatMilk from './topProductsImg/oatMilk.png';
import raw from './topProductsImg/raw.png';
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const topProducts = [
  {
    img: barista, title: 'Pacific barista beverage', quantity: '1 unit', rating: '4.5',
    oldPrice: '$12.00', price: '$8.00', sold: 'Sold: 30/40', discount: '-25%'
  },
  {
    img: kombucha, title: 'Kombucha local lilikoi', quantity: '1 unit', rating: '4.0',
    oldPrice: '$12.00', price: '6.00', sold: 'Sold: 9/25', discount: '-35%'
  },
  {
    img: lays, title: 'Cheese flavoured Lays', quantity: '1 unit', rating: '4.5',
    oldPrice: '$12.00', price: '$8.00', sold: 'Sold: 12/60', discount: '-15%'
  },
  {
    img: oatMilk, title: 'Oat milk barista', quantity: '1 unit', rating: '5.0',
    oldPrice: '$8.00', price: '$5.00', sold: 'Sold: 12/35', discount: '-39%'
  },
  {
    img: raw, title: 'Dr. raw relax hearts', quantity: '1 unit', rating: '3.5',
    oldPrice: '$12.00', price: '$8.00', sold: 'Sold: 5/25', discount: '-12%'
  },
  {
    img: barista, title: 'Pacific barista beverage', quantity: '1 unit', rating: '4.5',
    oldPrice: '$12.00', price: '$8.00', sold: 'Sold: 30/40', discount: '-25%'
  },
  {
    img: kombucha, title: 'Kombucha local lilikoi', quantity: '1 unit', rating: '4.0',
    oldPrice: '$12.00', price: '6.00', sold: 'Sold: 9/25', discount: '-35%'
  },
  {
    img: lays, title: 'Cheese flavoured Lays', quantity: '1 unit', rating: '4.5',
    oldPrice: '$12.00', price: '$8.00', sold: 'Sold: 12/60', discount: '-15%'
  },
  {
    img: oatMilk, title: 'Oat milk barista', quantity: '1 unit', rating: '5.0',
    oldPrice: '$8.00', price: '$5.00', sold: 'Sold: 12/35', discount: '-39%'
  },
  {
    img: raw, title: 'Dr. raw relax hearts', quantity: '1 unit', rating: '3.5',
    oldPrice: '$12.00', price: '$8.00', sold: 'Sold: 5/25', discount: '-12%'
  },
];

const TopProducts = () => {

  return (
    <ProductCarousel
      products={topProducts}
      heading={'Top offered products'}
      expire={'Expires in: 12hr : 41min : 8s'}/>
  );
};

export default TopProducts;