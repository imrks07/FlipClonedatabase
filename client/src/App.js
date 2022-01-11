// this is main topic 
// today i learn routing and inhasment 
import{BrowserRouter} from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
   <Header/>
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/cart" component={Cart} />
   <Home/>
   </Switch>
   
   

  
    </BrowserRouter>
  );
}

export default App;
