import './work_details.css'
import vector_4 from './assets/Vector-4.png'

const Work_Details=()=>{
    return(
        <div className='work-details'>
            <div className="work-title"><p>Work</p></div>
            <div className="offered-services"><p>Services Offered:</p></div>
            <div className="service"><p>Web Development</p><div className="work-icon"><img src={vector_4} /></div></div>
            <div className="service"><p>Digital Marketing</p><div className="work-icon"><img src={vector_4} /></div></div>
            <div className="expertise-details"><p>Expertise:</p></div>
            <div className="expertise"><p>Web Development</p></div>
            <div className="industries"><p>industries:</p></div>
        </div>
    )
}

export default Work_Details;