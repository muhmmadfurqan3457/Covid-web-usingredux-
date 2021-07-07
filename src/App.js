import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import WorldtotalCases from './config/worldTotalcases';
import Home from './home';
import Store from './Store';
import {Provider} from 'react-redux'
// import { useEffect, useState } from 'react';


function App() {

  return (
    
    <div>
     <Provider store={Store}> 


      <Home />
    
      {/* <WorldtotalCases/> */}
 
      </Provider>
       </div>
  );
}

export default App;
 