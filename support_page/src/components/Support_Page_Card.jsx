import './Support_Page_Card.css'
const Support_Page_Card=(props)=>{

    return(
        <div className="support-page-card">
            <div className="card-img-container">
                <img src={props.icon}/>
            </div>

            <div className="card-title">
                <p>{props.heading1}</p>
            </div>

            <div className="card-paragraph">
                <p>{props.heading2}</p>
            </div>

            <div className="card-link">
                <p>{props.heading3}</p>
            </div>
        </div>
    )
}

export default Support_Page_Card;