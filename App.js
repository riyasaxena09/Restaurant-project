import './App.css'
import One from './one';
import { Routes } from 'react-router';
import Foodoffer from './Foodoffer';
import { Route } from 'react-router';
import Savemenu from './savedmenu';
import {BrowserRouter} from 'react-router-dom';
import Order from './Order';
import { Provider } from 'react-redux';
import store from './redux';
import Sign from './signin';
function App() {
  return (
   
    <div className="App">
     
      <Provider store={store}>
 <BrowserRouter>
<Routes>
  <Route path='/sign' element={<One></One>}></Route>
  <Route path='/' element={<Sign></Sign>}></Route>
  <Route path='/orders' element={<Order></Order>}></Route>
  <Route path='/Savemenu' element={<Savemenu></Savemenu>}></Route>
  <Route path='/Searchmenu' element={<Foodoffer></Foodoffer>}></Route>
  </Routes>
 </BrowserRouter>
 </Provider>
    </div>
 
  );
}

export default App;
