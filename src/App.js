import Main from './Main/Main';
import Product from './admin/Product';
import Productedit from './admin/Productedit';
import Productcreate from './admin/Productcreate';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/admin/products' exact element={<Product />} />
          <Route path='/admin/products/:id/edit' exact element={<Productedit />} />
          <Route path='/admin/products/create' exact element={<Productcreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
