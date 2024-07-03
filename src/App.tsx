import React from 'react';
import './styles.css';
// Home component contains the Header, Footer, and Container (includes Aside & unique Main)
import Home from './components/home/home';
// Customers component contains the Header, Footer, and Container (includes Aside & unique Main)
import Customers from './components/customers/customers';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            {/* exact path route used for first entry only (generally default entrypoint) */}
            <Route exact path="/" component={Home} />
            <Route path="/customers" component={Customers} />
        </BrowserRouter>
    </div>
  );
}

export default App;
