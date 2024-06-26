import './summary.css'

const Pm_summary=()=>{
    return(
        <div id='summary-container'>
            <div id='summary-heading'>
                <h3>Payment summary</h3>
            </div>

            <div className='summary-items'>
            <div className='summary-content'>
            <div className='summary-item1'><p>Total Payment</p></div>
            <div className='summary-item2'><h3>₹4,618/-</h3></div> 
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>Payment Structure</p></div>
            <div className='summary-item2'><h3>50-10-40</h3></div>
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>Payment term</p></div>
            <div className='summary-item2'><h3>3</h3></div>
            </div>
            </div>
            <div id='total'>
            <div className='summary-item1'><h3>Payable amount</h3></div>
            <div className='summary-item2'><h3>₹2,309/-</h3></div>
            </div> 
            <div id='btn-container'>
            <button id='proceed'>proceed</button>
            </div>
        </div>
    );
}

export default Pm_summary;