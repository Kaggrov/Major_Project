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
function App() {
  // const [{ user }, dispatch] = useStateValue()
  
  // return (
  //   <div className="App">
  //     {
  //       user ? (
  //         <>
  //           <Header />

  //           <div className="App__body">
  //             <Sidebar />
  //             <Feed />
  //             <Widgets />
  //           </div>
  //         </>
  //       ) : (
  //           <Login />
  //         )
  //     }

  //   </div>
  // );

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;