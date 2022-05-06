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
import FoodMartApp from "./components/FoodMartApp/FoodMartApp";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className={'wrapper'}>
        <Billboard/>
        {/*<Category/>*/}
        {/*<Brands/>*/}
        {/*<TrendingProducts/>*/}
        {/*<Banners/>*/}
        {/*<TopProducts/>*/}
        {/*<RegisterForm/>*/}
        {/*<BestSellProducts/>*/}
        {/*<LandedItems/>*/}
        {/*<Articles/>*/}
        {/*<FoodMartApp/>*/}
        {/*<PopularProducts/>*/}
        {/*<Services/>*/}
      </div>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
