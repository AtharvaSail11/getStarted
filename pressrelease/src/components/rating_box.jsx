import './rating_box.css'
import message_icon from './assets/Vector-3.png'
import call_icon from './assets/Vector-1.png'
import video_icon from './assets/Vector.png'
import profile_icon from './assets/iconamoon_profile-bold.svg'
import bag_icon from './assets/Vector.svg'
import Rating from '@mui/material/Rating';



const Rating_box=(props)=>{
    return(
        <div className={props.State==="About"?"rating-container":"rating-container full-width"}>
            <div id='heading'><p>W<span id='x'>X</span>T</p></div>
            <div className='rating-items' id='ratings'><p>Ratings</p><div id='stars'><Rating /></div></div>
            <div className='rating-items'><div className='rating-item'><div className='icons'><img className='icon' src={message_icon} /></div><p>Message</p></div>
            <div className='rating-item'><div className='icons'><img className='icon' src={call_icon} /></div><p>Call</p></div>
            <div className='rating-item'><div className='icons'><img className='icon' src={video_icon} /></div><p>Video</p></div>
            </div>
        </div>
    )
}

export default Rating_box;