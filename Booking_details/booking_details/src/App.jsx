import NavBar from "./components/navBar"
import Booking_container from "./components/booking_container"
import Pm_summary from "./components/pm_summary"
import './App.css'

function App() {
  return (
    <div className='app'>
      <div id="navBar">
      <NavBar />
      </div>

      <div id="head-section">
        <p>Web Development | Shopify Website</p>
      </div>
      <div className='sections'>
      <div className="booking-section1"><Booking_container/> </div>
      <div className="booking-section2"><Pm_summary/></div>
      </div>
    </div>
  )
}

export default App
