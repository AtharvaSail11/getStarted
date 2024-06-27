import './basic_details.css'
import calendar from './assets/calendar.png'
import experience from './assets/experience.png'
import money from './assets/money.png'
import communication from './assets/247hr-communication.png'
import service from './assets/service.png'
import ratio from './assets/ratio.png'
import timeline from './assets/refresh-time.png'
import features from './assets/new-features.png'
import report from './assets/report.png'

const Basic_details = () => {
    return (
        <div id='detail-container'>
            <h4>Basic Details</h4>
            <div className='detail-sections'>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={money} /></div>
                        <div className='heading'><p>Price</p></div>
                    </div>
                    <p className='detail-text'>22,400</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={calendar} /></div>
                        <div className='heading'><p>Start date</p></div>
                    </div>
                    <p className='detail-text'>24 Feb 2024</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={service} /></div>
                        <div className='heading'><p>Post service</p></div>
                    </div>
                    <p className='detail-text'>Yes</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={timeline} /></div>
                        <div className='heading'><p>Timeline</p></div>
                    </div>
                    <p className='detail-text'>24 Jan 2024 to 24 Feb 2024</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={communication} /></div>
                        <div className='heading'><p>Post service (If answer was yes)</p></div>
                    </div>
                    <p className='detail-text'>30 Days</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={experience} /></div>
                        <div className='heading'><p>Experience of partner</p></div>
                    </div>
                    <p className='detail-text'>7 Years</p>
                </div>
                <div className='detail-content full-width'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={ratio} /></div>
                        <div className='heading'><p>Payment ratio</p></div>
                    </div>
                    <p className='detail-text'>50-20-30</p>
                </div>
                <div className='detail-content full-width'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={features} /></div>
                        <div className='heading'><p>Highlighted features</p></div>
                    </div>
                    <div id='features'>
                        <p>2 revisions</p>
                        <p>24*7 Support</p>
                        <p>Delivery in 2 days</p>
                        <p>Post service</p>
                    </div>
                </div>

                <div className='detail-content full-width' id='detail'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={report} /></div>
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