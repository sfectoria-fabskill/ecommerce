import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Orders from './orders/Orders';


function App() {
  return (
<div>
  <Navbar/>
  <Orders/>
</div>
  );
}

export default App;
