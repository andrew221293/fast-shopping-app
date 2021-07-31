import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutCart from './components/CheckoutCart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Congrats from './components/Congrats';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path='/cart'>
                      <Navbar/>
                      <CheckoutCart/>
                  </Route>
                  <Route path='/congrats'>
                      <Congrats/>
                  </Route>
                  <Route path='/'>
                      <Navbar/>
                      <Products/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
