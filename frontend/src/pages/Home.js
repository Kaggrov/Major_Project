import React, { useEffect } from 'react';
import './Home.css';
import Feed from '../Components/Feed';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Widgets from '../Components/Widgets';
import Login from './Login';
import  {useStateValue}  from '../StateProvider';

function Home() {
  const [{ user }, dispatch] = useStateValue()
  
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

  useEffect(()=>{

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"3e096a9cf9ff99d2131ce3bb6885b9cb6","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    
  },[])

  return (
    <div className='Home'>
      {
        user ? (
          <>
                  <Header/>

                  <div className="Home__body">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                  </div>
          </>
        ) : <Login/>
      }
    </div>
  )
}

export default Home;