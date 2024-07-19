import './proposers_details.css'
import email_icon from './assets/ic_outline-email.png'
import smartphone_icon from './assets/fluent_phone-16-regular.png'

const Proposers_details=()=>{
    return(
        <div id='proposerCard'>
            <div id='proposer-heading'><p>Proposer's Details</p></div>
            <div id='proposer-email'><div className='card-icons'><img src={email_icon} /></div><p>test@test.com</p></div>
            <div id='proposer-phone'><div className='card-icons'><img src={smartphone_icon} /></div><p>+919777777777</p></div>
        </div>
    )
}

export default Proposers_details;