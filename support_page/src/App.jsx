import './App.css'
import Support_Page_Navbar from './components/Support_Page_Navbar'
import Support_Page_Main from './components/Support_Page_Main'

function App() {

  return (
  <div className='App'>
    <div className='support-section2'>
      <div className='support-navbar'><Support_Page_Navbar/></div>
      <div className='support-main-section'><Support_Page_Main/></div>
    </div>
  </div>
      
  )
}

export default App
