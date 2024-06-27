import Pm_summary from './components/pm_summary'
import Rating_box from './components/rating_box'
import Basic_details from './components/basic_details'
import bizowl_logo from './components/assets/bizowl_logo.png'
import './App.css'
import call_logo from './components/assets/Vector-1.png'

function App() {

  return (
      <div className='app'>
        <nav>
          <div id='logo'>
              <img id='logo-text' src={bizowl_logo} />
          </div>

          <div id='need-help'>
          <div className='call-logo'><img src={call_logo}/></div><p>need help?</p>
          </div>
        </nav>

        <div id='content'>
        <div id='section1'>
          <div id='logo-box'>
              <div id='logo-item'>
                  <h1>W<span id='X'>X</span>T</h1>
              </div>
          </div>
          <Rating_box/>
        </div>
        <div id='section2'>
            <Pm_summary/>
        </div>
        <div id='section3'>
            <Basic_details/>
        </div>
        </div>
      </div>
  )
}

export default App
