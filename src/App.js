import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import Category from "./components/Category/Category";
import Brands from "./components/Brands/Brands";
import TrendingProducts from "./components/Products/TrendingProducts/TrendingProducts";
import Banners from "./components/Banners/Banners";
import TopProducts from "./components/Products/TopProducts/TopProducts";
import RegisterForm from "./containers/RegisterForm/RegisterForm";
import BestSellProducts from "./components/Products/BestSellProducts/BestSellProducts";
import LandedItems from "./components/Products/LandedItems/LandedItems";
import Articles from "./components/Articles/Articles";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className={'wrapper'}>
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
      </div>
    </div>
  );
}

export default App;
