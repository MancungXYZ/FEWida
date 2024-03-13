import { BrowserRouter as Router,  
  Route, 
  Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Invoice from './pages/Invoice'
import Cart from './pages/Cart'
import Transaction from './pages/Transaction'
import Revenue from "./pages/Revenue";

function App() {

  return (
    <div className='bg-white w-full h-full'>
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/invoice/:id" component={Invoice} />
          <Route path="/" component={Transaction} />
          <Route path="/revenue" component={Revenue} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
