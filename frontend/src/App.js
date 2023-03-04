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
      </Routes>
    </BrowserRouter>
  )
}

export default App;