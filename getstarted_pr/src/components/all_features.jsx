import './all_features.css'
import calendar from './assets/calendar.png'
import experience from './assets/experience.png'
import money from './assets/money.png'
import communication from './assets/247hr-communication.png'
import service from './assets/service.png'
import ratio from './assets/ratio.png'
import timeline from './assets/refresh-time.png'
import features from './assets/new-features.png'
import report from './assets/report.png'
import download_icon from './assets/line-md_download-outline.png'

const All_features = () => {
    return (
        <div id='detail-container'>
            <h4>All Features</h4>
            <div className='detail-sections'>
                <div className="detail-section">
                <div className='detail-content no-marginTop'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={money} /></div>
                        <div className='heading'><p>Price</p></div>
                    </div>
                    <p className='detail-text'>22,400</p>
                </div>
                <div className='detail-content no-marginTop'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={calendar} /></div>
                        <div className='heading'><p>Media Outlets</p></div>
                    </div>
                    <p className='detail-text'>150+</p>
                </div>
                </div>
                

                <div className="detail-section">
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={service} /></div>
                        <div className='heading'><p>Press Releasing Writing</p></div>
                    </div>
                    <p className='detail-text'>Yes</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={timeline} /></div>
                        <div className='heading'><p>TAT</p></div>
                    </div>
                    <p className='detail-text'>2-3 hrs</p>
                </div>
                </div>
                

                <div className="detail-section">
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={communication} /></div>
                        <div className='heading'><p>Medium of Distribution</p></div>
                    </div>
                    <p className='detail-text'>Digital</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={experience} /></div>
                        <div className='heading'><p>Word Limit</p></div>
                    </div>
                    <p className='detail-text'>400</p>
                </div>
                </div>

                <div className="detail-section">
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={communication} /></div>
                        <div className='heading'><p>Industry Specific</p></div>
                    </div>
                    <p className='detail-text'>Yes</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={experience} /></div>
                        <div className='heading'><p>Language</p></div>
                    </div>
                    <p className='detail-text'>English</p>
                </div>
                </div>

                <div className="detail-section">
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={communication} /></div>
                        <div className='heading'><p>Images</p></div>
                    </div>
                    <p className='detail-text'>1</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={experience} /></div>
                        <div className='heading'><p>Links</p></div>
                    </div>
                    <p className='detail-text'>1</p>
                </div>
                </div>
                
                <div className="detail-section">
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={communication} /></div>
                        <div className='heading'><p>Indexed on Search Engine</p></div>
                    </div>
                    <p className='detail-text'>Digital</p>
                </div>
                <div className='detail-content'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={experience} /></div>
                        <div className='heading'><p>Visibility Report</p></div>
                    </div>
                    <p className='detail-text'>7 Years</p>
                </div>
                </div>

                <div className='detail-content full-width' id='detail'>
                    <div className='detail-heading'>
                        <div className='symbol'><img className='image' src={report} /></div>
                        <div className='heading'><p id='All-details'>All Details</p></div>
                    </div>
                    <div className='details'>
                        <div className='detail-card'><p>Business Wire India</p></div>
                        <div className='detail-card'><p>India Press Release</p></div>
                        <div className='detail-card'><p>India Press Release</p></div>
                        <div className='detail-card'><p>Business Wire India</p></div>
                        <div className='detail-card'><p>India Press Release</p></div>
                        <div className='detail-card'><p>+7</p></div>
                    </div>

                    <div className='detail-heading'>
                        <div className='heading'><p id='Guaranteed-Placement'>Guaranteed Placement</p></div>
                    </div>
                    <div className='details'>
                        <div className='detail-card'><p>Business Wire India</p></div>
                        <div className='detail-card'><p>India Press Release</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default All_features;