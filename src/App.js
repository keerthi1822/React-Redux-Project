

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './Components/Headers';

import './App.css';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers /> 
        <Routes>
          <Route path="/" exact element={<Products/>} />
          <Route path="/product/:productId" exact element={<ProductDetails/>} />
          <Route>404 Not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
