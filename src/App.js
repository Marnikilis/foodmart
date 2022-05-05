import './App.scss';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Billboard from "./Billboard/Billboard";
import Category from "./Category/Category";
import Brands from "./Brands/Brands";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import Banners from "./Banners/Banners";

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
      </div>
    </div>
  );
}

export default App;
