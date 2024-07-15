import './Portfolio_Details.css'
import Review_card from './review_card';

const Portfolio_Details=()=>{
    return(
        <div className='portfolio-details'>
            <div className="Details"><p>Basic Details</p></div>
            <div className="experience"><p>Experience:</p><p>7 Years</p></div>
            <div className="reviews"><p>Reviews:</p></div>
            <div className="review-content">
                <div className='review-cards'><Review_card/></div>
                <div className='review-cards'><Review_card/></div>
                <div className='review-cards'><Review_card/></div>
                <div className='review-cards'><Review_card/></div>
            </div>
        </div>
    )
}

export default Portfolio_Details;