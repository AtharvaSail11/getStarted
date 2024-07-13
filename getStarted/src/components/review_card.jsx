import './review_card.css'
import inverted_comma from './assets/inverted-comma.png'
import Rating from '@mui/material/Rating';

const Review_card=()=>{

    return(
    <div className='card-body'>
        <div className='card-div1'><p>Shopify Development</p></div>
        <div className='card-div2'><p>Everything went really good with the Bizowl team, The quality of work was great.</p></div>
        <div className='card-div3'><Rating sx={{width:1/4}}/></div>
        <div className='card-div4'><img src={inverted_comma}/></div>
        <div className='card-div5'>
            <div className='profile-icon'></div>
            <div className='profile-name'>First Name</div>
        </div>
    </div>);
}

export default Review_card;