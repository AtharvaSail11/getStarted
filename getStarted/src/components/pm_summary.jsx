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
            <div className='summary-item2'><p>₹4,618/-</p></div> 
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>Payment Structure</p></div>
            <div className='summary-item2'><p>50-10-40</p></div>
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>Payment term</p></div>
            <div className='summary-item2'><p>3</p></div>
            </div>
            </div>
            <div id='total'>
            <div className='total-item1'><p>Payable amount</p></div>
            <div className='total-item2'><p>₹2,309/-</p></div>
            </div> 
            <div id='btn-container'>
            <button id='proceed'>Proceed</button>
            </div>
        </div>
    );
}

export default Pm_summary;