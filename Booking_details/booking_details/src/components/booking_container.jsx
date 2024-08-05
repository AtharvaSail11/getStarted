import './booking_container.css'

const Booking_container=()=>{
    return(
        <div className='booking-container'>
            <div className='booking-title'>
                <div className="heading-content">
                    <div id='logo-border1'>
                        <div id="logo-border2"><p>C<span>R</span>B</p></div>
                    </div>
                    <p>Booking Details</p>
                </div>
            </div>
            <div className='booking-content'>
                <div className='booking-inputs' id='top-input'>
                    <input type="text" className='input-box margin-left' placeholder='name'/>
                    <input type="text" className='input-box margin-right' placeholder='contact'/>
                </div>
                <div className='booking-inputs'>
                    <input type="text" className='input-box margin-left' placeholder='Email Address'/>
                    <input type="text" className='input-box margin-right' placeholder='Whatsapp Number'/>
                </div>
                <div className='booking-inputs'>
                    <input type="text" className='input-box margin-left' placeholder='Name on Invoice'/>
                    <input type="text" className='input-box margin-right' placeholder='GST number'/>
                </div>
                <div className='comment-area'>
                <input type="text" className='text-area' placeholder='Full Address'/>
                </div>
            </div>
        </div>
    );

}

export default Booking_container;