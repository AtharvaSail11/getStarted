import './rating_box.css'
import message_icon from './assets/Vector-3.png'

const Rating_box=()=>{
    return(
        <div className='rating-container'>
            <div id='heading'><h2>WXT</h2></div>
            <div className='rating-items' id='ratings'><p>Ratings</p><div id='stars'>stars</div></div>
            <div className='rating-items'><div className='rating-item'><div className='icons'><img className='icon' src={message_icon} /></div><p>Message</p></div>
            <div className='rating-item'><div className='icons'><img className='icon' src={message_icon} /></div><p>Message</p></div>
            <div className='rating-item'><div className='icons'><img className='icon' src={message_icon} /></div><p>Message</p></div>
            </div>
            <div className='rating-items'><div className='header-items'><div className='box'>A</div><p>About</p></div>
            <div class='header-items'><div className='box'>P</div><p>Portfolio</p></div>
        </div>
        </div>
    )
}

export default Rating_box;