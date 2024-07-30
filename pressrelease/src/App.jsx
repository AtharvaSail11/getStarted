import {useState} from 'react';
import Pm_summary from './components/pm_summary'
import Rating_box from './components/rating_box'
import All_features from './components/all_features';
import bizowl_logo from './components/assets/bizowl_logo.png'
import './App.css'
import call_logo from './components/assets/phone-icon.png'
import Portfolio_Details from './components/Portfolio_Details';
import Work_Details from './components/work_details';

function App() {

  const [state,setState]=useState("About");
  return (
      <div className='app'>
        <nav>
          <div id='logo'>
              <img id='logo-text' src={bizowl_logo} />
          </div>

          <div id='need-help'>
          <div className='call-logo'><img src={call_logo}/></div><p>Need Help?</p>
          </div>
        </nav>

        <div className={state==="About"?"content-About":"content-Portfolio"}>
        <div className='section1'>
          <div id='logo-box'>
              <div id='logo-item'>
                  <p>W<span id='X'>X</span>T</p>
              </div>
          </div>
          <Rating_box State={state} fn={(text)=>{setState(text)}} />
        </div>
        <div className={state==="About"?"section2":"hidden"}>
            <Pm_summary />
        </div>
        <div className={state==="About"?"section3-About":"section3-Portfolio"}>
          {state==="About"?<All_features setFn={setState} />:<div className='portfolio-Items'>
            <div className='portfolio-item1'><Work_Details/></div>
            <div className="portfolio-item2"><Portfolio_Details/></div>                  
            </div>}
        </div>
        </div>
      </div>
  )
}

export default App
