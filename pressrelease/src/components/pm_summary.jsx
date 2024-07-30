import './summary.css'

const Pm_summary=()=>{
    return(
        <div id='summary-container'>
            <div id='summary-heading'>
                <p>Payment summary</p>
            </div>
 
            <div className='summary-items'>
            <div className='summary-content'>
            <div className='summary-logo'><p>A<span>P</span>K</p></div>
            </div>
            <div className='summary-content'>
            <div className='summary-item1 press-release-section'><p>Press Release Distribution</p></div>
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>Total Payment</p></div>
            <div className='summary-item2'><p>₹3913/-</p></div> 
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>GST (18%)</p></div>
            <div className='summary-item2'><p>₹704/-</p></div>
            </div>
            </div>
            <div id='total'>
            <div className='total-item1'><p>Payable amount</p></div>
            <div className='total-item2'><p>₹4617/-</p></div>
            </div> 
            <div id='btn-container'>
            <button id='proceed'>Proceed</button>
            </div>
        </div>
    );
}

export default Pm_summary;