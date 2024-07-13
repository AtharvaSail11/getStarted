import Search from './assets/Search.png'
import './Support_Page_Navbar.css'
import profile_icon_image from './assets/Ellipse_664.png'
import line_md_email from './assets/line-md_email.png'
import Vector1 from './assets/Vector1.png'

const Support_Page_Navbar=()=>{
    return(
        <div className="support-page-navbar">
            <p className='support-page-title'>Projects</p>

            <div className="support-page-searchbar">
                <div className="searchbar-icon">
                    <img src={Search} />
                </div>

                <input type="text" placeholder="Search..."/>
            </div>

            <div className='navbar-profile-section'>
                <img className='navbar-profile-notification' src={line_md_email}/>
                <img className='navbar-profile-notification' src={Vector1}/>
                <div className='navbar-profile-div'>
                    <div className="navbar-profile-icon">
                        <img src={profile_icon_image} />
                    </div>
                    <div className="navbar-profile-details">
                        <p>Partner Name</p>
                        <p>CBR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support_Page_Navbar;