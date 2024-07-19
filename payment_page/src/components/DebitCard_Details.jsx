import './DebitCard_Details.css'

const DebitCard_Details=()=>{
    return(
        <div className='Bank-Details-Section'>
            <div className="bank-details-box">
                <div className="bank-detail-heading"><p>Debit Card Details</p></div>
                <div className="bank-detail-div"><p>Debit Card Number</p><input type='text'></input></div>
                <div className="bank-detail-div"><p>Name on Card</p><input type='text'></input></div>
                <div className="bank-detail-divs">
                <div className="debit-card-details-div"><div className='card-input-heading'><p>Expiry Date</p></div><div className='card-detail-inputs'><input type="text" placeholder='MM'/><input type="text" placeholder='YY'/></div></div>
                <div className="debit-card-details-div"><div className='card-input-heading'><p>CVV</p></div><div className='card-detail-inputs'><input type="text"/></div></div>
                </div>
                <div className='confirm-btn-container'><button>Pay Securely</button></div>
                <div className='extra-info'><p>Please Note : 2% Additional fee will be levied upon all online</p><p>transactions except bank transfer.</p></div>
            </div>
        </div>
    );
}

export default DebitCard_Details;