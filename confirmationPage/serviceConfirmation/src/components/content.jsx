import './content.css'
import Image1 from './assets/Na_Dec_16-[Converted] 1.png'
import support_character from './assets/Support-character 1.png'
import tick from './assets/Charm_tick.png'
import call_logo from './assets/phone-icon.png'

const Content=()=>{
    return(
        <div className="content">
            <div id='Heading'>
                <div id='green-tick'>
                    <img src={tick}></img>
                </div>
                <p>Service Request Confirmed</p>
            </div>

            <div id='image-box'>
                <img src={Image1} id='image1'></img>
            </div>
            <div id='big-text'>
                <p><span>Congratulations</span> ! You have gotten one step closer to your dream</p>
            </div>

            <div id='small-text'>
                <p>Thankyou for trusting Bizowl. We will make sure that your experience with us goes smoother than
                    you are anticipating.
                </p>
            </div>
            <div className='card' id='card1'>
                <div id='image2'>
                    <img src={support_character}></img>
                </div>
                <div className='card-content'>
                    <p>A <span>business growth partner</span> will be assigned to assist you further with your work, who will always be
                        there to give you assistance.
                    </p>
                </div>
            </div>

            <div className='card' id='card2'>
                <div className='card-text'>
                    <p id='cardText1'>Need Our help?</p>
                    <p id='cardText2'>Call us in case you faced any issue in our service or have any doubt.</p>
                </div>
                <div className='phone-no'>
                    <div><img src={call_logo} /></div>
                    <p>+919354651433</p>
                </div>
            </div>


        </div>
    )
}

export default Content;