import './summary.css'
import * as React from 'react';
import Switch from './Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Pm_summary=()=>{
    return(
        <div id='summary-container'>
            <div id='summary-heading'>
                <p>Payment summary</p>
            </div>

            <div className='summary-items'>
            <div className='summary-content'>
            <div className='summary-item1'><p>Total Payment</p></div>
            <div className='summary-item2'><p>₹4,618/-</p></div> 
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p >Payment Structure</p></div>
            <div className='summary-item2'><p>50-10-40</p></div>
            </div>
            <div className='summary-content'>
            <div className='summary-item1'><p>Payment term</p></div>
            <div className='summary-item2'><p>3</p></div>
            </div>
            </div>
            <div id='total'>
            <div className='total-item1'><p>You'll pay</p></div>
            <div className='total-item2'><p id='amount-text'>₹2,309/-</p><p id='GST-text'>( 18% GST included )</p></div>
            </div> 
            <div id='btn-container'>
            <button id='pay-button'><p>Pay-Securely</p></button>
            </div>
            <div id="installment-info">
                <div className='installment-text'><p>If you like to pay full add 100 and if you want to pay 2 installments calculate 
                the sum and add  here. For Ex - 50-10-40, 2 Term will be. 50+10 = 60</p></div>
                <div className='installment-input'></div>
            </div>
            <div className='extra-details'>
            <div className='payment-type'><Switch/></div>
            <div className='installment-text'><p>Want to pay full or partial Payment?</p></div>
            </div>
            <div className='extra-details'>
            <div className='agreement-input'></div>
            <div className='installment-text'><p>Sign Agreement</p></div>
            </div>
            <div className='extra-details' id='last'>
            <div className='agreement-input'></div>
            <div className='extra-text'><p>I here by declare that all information provided above is 
            true, and I accept all the terms and conditions. </p></div>
            </div>
        </div>
    );
}

export default Pm_summary;