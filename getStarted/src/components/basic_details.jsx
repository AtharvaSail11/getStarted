import react from 'react'
import './basic_details.css'

const Basic_details = () => {
    return (
        <div id='detail-container'>
            <h4>Basic Details</h4>
            <div className='detail-sections'>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'>A</div>
                        <div className='heading'><p>Price</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'>B</div>
                        <div className='heading'><p>Start date</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'>C</div>
                        <div className='heading'><p>Post service</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'>D</div>
                        <div className='heading'><p>Timeline</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'>E</div>
                        <div className='heading'><p>Post service (If answer was yes)</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'>F</div>
                        <div className='heading'><p>Experience of partner</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content full-width'>
                    <div className='detail-heading'>
                        <div className='symbol'>G</div>
                        <div className='heading'><p>Payment ratio</p></div>
                    </div>
                    <p>22,400</p>
                </div>
                <div className='detail-content full-width'>
                    <div className='detail-heading'>
                        <div className='symbol'>H</div>
                        <div className='heading'><p>Highlighted features</p></div>
                    </div>
                    <div id='features'>
                        <p>2 revisions</p>
                        <p>24*7 Support</p>
                        <p>Delivery in 2 days</p>
                        <p>Post service</p>
                    </div>
                </div>

                <div className='detail-content full-width'>
                    <div className='detail-heading'>
                        <div className='symbol'>I</div>
                        <div className='heading'><p>All details</p></div>
                    </div>
                    <div className='details'>
                        <div className='detail-card'><p>We will give you the support whenever it is needed even after 30 days</p></div>
                        <div className='detail-card'><p>We will give you the support whenever it is needed even after 30 days</p></div>
                    </div>
                    <div id='btn-box'>
                        <p>Download/Brochure</p>
                        <button id='download'>download</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basic_details;