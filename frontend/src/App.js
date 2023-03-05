// import React from 'react';
// import './App.css';
// import Feed from './Components/Feed';
// import Header from './Components/Header';
// import Login from './Components/Login';
//  import Sidebar from './Components/Sidebar';
// import Widgets from './Components/Widgets';
// import  {useStateValue}  from './StateProvider';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Explore from './pages/Explore';
import Product from "./pages/Product";
import Admin from "./pages/Admin"
import ExploreSale from "./pages/ExploreSale";
import ProductSale from "./pages/ProductSale"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;