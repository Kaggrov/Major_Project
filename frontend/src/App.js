import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
// import Widgets from './Components/Widget';

function App() {
  
  return (
    <div className="App">

      <Header />
      <div className="App__body">
              <Sidebar />
              <Feed />
       </div>
        
    </div>
  );
}

export default App;