import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className={'wrapper'}>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
