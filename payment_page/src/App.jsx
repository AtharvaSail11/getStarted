import './App.css'
import NavBar from './components/navBar'
import Cart_details from './components/cart_details'
import Proposers_details from './components/proposers_details'
import PaymentInput from './components/paymentInput'
function App() {
  return(
    <div className='App'>
        <div id='navBar'><NavBar/></div>
        <div id='Container'>
          <div className="payment-section1"><PaymentInput/></div>
          <div className="payment-section2">
            <div className='section2-1'><Proposers_details/></div>
            <div className='section2-2'><Cart_details/></div>
          </div>
        </div> 
    </div>
  )
  
}

export default App
