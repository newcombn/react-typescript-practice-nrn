import React from 'react';
import './styles.css';
import Home from './components/home/home';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    </div>
  );
}

export default App;
