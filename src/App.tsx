import React from 'react';
import Home from './screens/Home';
import AddFacility from './screens/AddFacility'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Congratulation from './components/Congratulation';


function App() {
  return (
    <div> 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Facility' element={<AddFacility/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

