import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { BrowserRouter , Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';  //4:15
import Loginscreen from './screens/Loginscreen';
import RegisterScreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <BrowserRouter>
          <Route exact path="/" component={Homescreen}></Route>
          <Route exact path="/cart" component={Cartscreen}></Route>
          <Route exact path="/register" component={RegisterScreen}></Route>
          <Route exact path="/login" component={Loginscreen}></Route>
          

        </BrowserRouter>

    </div>
  );
}

export default App;