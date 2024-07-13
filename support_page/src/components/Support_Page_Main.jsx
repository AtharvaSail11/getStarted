import './Support_Page_Main.css'
import cover_image from './assets/contact-us-cover-image 2.png'
import Support_Page_Card from './Support_Page_Card'
import Partner_Support from './assets/Partner_Support_1.png'
import General_1 from './assets/General_1.png'
import Sales_Support from './assets/Sales-Support_1.png'
import Customer_Support from './assets/Customer-Support-24_1.png'



const Support_Page_Main=()=>{
    return(
        <div className="support-page-main">
            <div className='support-page-main-img'><img src={cover_image}/></div>
            <div className='support-page-main-heading1'><p>Welcome! How can we help? </p></div>
            <div className='support-page-main-heading2'><p>Hi there stuck somewhere? don’t worry we’re here to help. Check out the options</p>
            <p>below to get help. Don’t worry whatever it is together we will sort out. </p></div>
            <div className="support-page-cards">
            <div className='support-page-cards-sections'><div className="support-page-main-card"><Support_Page_Card icon={General_1} heading1="General Queries" heading2="Whether it's a question or a concern, we're here to provide the support you need!" heading3="Get Support"/></div>

<div className="support-page-main-card"><Support_Page_Card icon={Customer_Support} heading1="Support" heading2="Looking for assistance? You're in the right place. Let us know how we can help!" heading3="Ask us anything!"/></div></div>
            <div className='support-page-cards-sections'><div className="support-page-main-card"><Support_Page_Card icon={Sales_Support} heading1="Sales Queries" heading2="Sales inquiries? Consider them sorted with our expert assistance!" heading3="Contact Sales Team"/></div>

<div className="support-page-main-card"><Support_Page_Card icon={Partner_Support} heading1="Partner Support" heading2="Partnerships make us stronger! Connect with our support team for partner inquiries." heading3="Ask us anything!"/></div></div>
                </div>
            </div>
        
    )
}

export default Support_Page_Main;