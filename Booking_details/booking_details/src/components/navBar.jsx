import './navBar.css'
import bizowl_logo from './assets/bizowl_logo.png'
import call_logo from './assets/phone-icon.png'

const NavBar=()=>{
    return(
       <div className='nav'>
         <div id='logo'>
              <img id='logo-text' src={bizowl_logo} />
          </div>

          <div id='need-help'>
          <div className='call-logo'><img src={call_logo}/></div><p>Need Help?</p>
          </div>
       </div>
    )
}

export default NavBar;