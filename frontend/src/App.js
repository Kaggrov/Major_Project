// import Login from './Components/Login';
// import  {useStateValue}  from './StateProvider';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Explore from './pages/Explore';
import Product from "./pages/Product";
import Admin from "./pages/Admin"
import ExploreSale from "./pages/ExploreSale";
import ProductSale from "./pages/ProductSale"
import CropTrends from "./pages/CropTrends";
import PricePredict from "./pages/PricePredict";
import CropDetect from "./pages/CropDetect";
import CropRecommend from "./pages/CropRecommend";
import Faq from "./Components/Faq";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/marketplace" element={<Market/>}/>
        <Route path="/rent" element={<Explore/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/sale" element={<ExploreSale/>}/>
        <Route path="/productSale" element={<ProductSale/>}/>
        <Route path="/cropTrends" element={<CropTrends/>}/>
        <Route path="/pricePredict" element={<PricePredict/>}/>
        <Route path="/detect" element={<CropDetect/>}/>
        <Route path="/recommend" element={<CropRecommend/>}/>
        <Route path="/expert" element={<Faq/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;