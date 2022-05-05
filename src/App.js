import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import Category from "./components/Category/Category";
import Brands from "./components/Brands/Brands";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import Banners from "./components/Banners/Banners";
import TopProducts from "./components/TopProducts/TopProducts";

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
      </div>
    </div>
  );
}

export default App;
