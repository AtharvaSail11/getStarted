import './cart_details.css'


const Cart_details=()=>{
    return(
        <div id='summary-container'>
            <div id='summary-heading'>
                <p>Your Cart</p>
                <p>Order no. BO2024001</p>
            </div>

            <div className='summary-items'>
            <div className='cart-content'>
            <div className='cart-item-logo'><div id='logo-border1'>
                        <div id="logo-border2"><p>C<span>R</span>B</p></div>
                    </div></div>
            <div className='cart-items'><div><p>Web Development</p></div><div><p>Shopify</p></div></div> 
            </div>
            <div className='cart-content'>
            <div className='cart-content1'><p>Proposal No.<span>BO_2024P001</span></p></div>
            </div>
            </div>
            <div id='total'>
            <div className='total-item1'><p>Total Amount</p></div>
            <div className='total-item2'><p>₹2,309/-</p></div>
            </div> 
        </div>
    );
}

export default Cart_details;