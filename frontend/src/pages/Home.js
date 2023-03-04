import React from 'react';
import './Home.css';
import Feed from '../Components/Feed';
import Header from '../Components/Header';
// import Login from './Components/Login';
 import Sidebar from '../Components/Sidebar';
import Widgets from '../Components/Widgets';
// import  {useStateValue}  from './StateProvider';

function Home() {
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
    <div className='Home'>
      <Header/>

        <div className="Home__body">
              <Sidebar />
              <Feed />
              <Widgets />
        </div>
    </div>
  )
}

export default Home;