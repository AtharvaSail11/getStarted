import './Bank_Transfer.css'

const Bank_Transfer=()=>{
    const checkout_display=()=>{
    }


    return(
        <div className='Bank-Details-Section'>
            <script src=''></script>
            <div className="bank-details-box">
                <div className="bank-detail-heading"><p>Bank Transfer Details</p></div>
                <div className="bank-detail-div"><p>Account Number</p><input type='text'></input></div>
                <div className="bank-detail-div"><p>Account Holder Name</p><input type='text'></input></div>
                <div className="bank-detail-div"><p>IFSC</p><input type='text'></input></div>
                <div className='confirm-btn-container'><button>Confirm</button></div>
                <div className='extra-info'><p>No, Additional fee in this method.</p><p>After transferring the amount on the given details please share the details at contact@bizzowl.com or send whatsapp +919354651433 and then press on confirm</p></div>
            </div>
        </div>
    );
}

export default Bank_Transfer;