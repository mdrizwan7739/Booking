
import './App.css';
import Flight from './components/Flight';
import Navbar from './components/Navbar';
import Stay from './components/Stay';
import CheckoutFlight from './components/CheckoutFlight';
import CheckoutStay from './components/CheckoutStay';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Stay />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/CheckoutFlight/:price" element={<CheckoutFlight />} />
      <Route path="/CheckoutStay/:toDate/:fromDate/:price" element={<CheckoutStay />} />


     {/* <Flight/> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
