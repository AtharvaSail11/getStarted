import './rating_box.css'

const Rating_box=()=>{
    return(
        <div className='rating-container'>
            <div id='heading'><h2>WXT</h2></div>
            <div className='rating-items' id='ratings'><p>Ratings</p><div id='stars'>stars</div></div>
            <div className='rating-items'><div id='messages'>Message</div> 
            <div id='call'>Call</div> 
            <div id='video'>Video</div></div>
            <div className='rating-items'><div class='header-items'><div className='box'>A</div><p>About</p></div>
            <div class='header-items'><div className='box'>P</div><p>Portfolio</p></div>
        </div>
        </div>
    )
}

export default Rating_box;