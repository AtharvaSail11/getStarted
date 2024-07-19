import { useState } from 'react';
import './paymentInput.css'
import Bank_Transfer from './Bank_Transfer';
import DebitCard_Details from './DebitCard_Details';

const PaymentInput=()=>{
const optionArray=["DebitCard","CreditCard","NetBanking","UPI","Wallet","PayLater","BankTransfer","EMI"]
const [Option,setOption]=useState("DebitCard");
    return(
        <div className='payment-container'>
            <div className='payment-Options'>
                <div className={Option===optionArray[0]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[0]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[0])}>
                    <div className={Option===optionArray[0]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[0]?'payment-Text-Active':'payment-Text'}><p>Debit Card</p></div>
                </div>
                </div>
                
                <div className={Option===optionArray[1]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[1]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[1])}>
                    <div className={Option===optionArray[1]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[1]?'payment-Text-Active':'payment-Text'}><p>Credit Card</p></div>
                </div>
                </div>

                <div className={Option===optionArray[2]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[2]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[2])}>
                    <div className={Option===optionArray[2]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[2]?'payment-Text-Active':'payment-Text'}><p>Net Banking</p></div>
                </div>
                </div>

                <div className={Option===optionArray[3]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[3]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[3])}>
                    <div className={Option===optionArray[3]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[3]?'payment-Text-Active':'payment-Text'}><p>UPI</p></div>
                </div>
                </div>

                <div className={Option===optionArray[4]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[4]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[4])}>
                    <div className={Option===optionArray[4]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[4]?'payment-Text-Active':'payment-Text'}><p>Wallet</p></div>
                </div>
                </div>

                <div className={Option===optionArray[5]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[5]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[5])}>
                    <div className={Option===optionArray[5]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[5]?'payment-Text-Active':'payment-Text'}><p>Pay Later</p></div>
                </div>
                </div>

                <div className={Option===optionArray[6]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[6]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[6])}>
                    <div className={Option===optionArray[6]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[6]?'payment-Text-Active':'payment-Text'}><p>Bank Transfer</p></div>
                </div>
                </div>

                <div className={Option===optionArray[7]?"payment-Option-Box-Active":"payment-Option-Box"}>
                <div className={Option===optionArray[7]?"payment-Option-Active":"payment-Option"} onClick={()=>setOption(optionArray[7])}>
                    <div className={Option===optionArray[7]?'payment-Icon-Active':'payment-Icon'}></div>
                    <div className={Option===optionArray[7]?'payment-Text-Active':'payment-Text'}><p>EMI</p></div>
                </div>
                </div>
            </div>
            <div className="payment-Section">{Option===optionArray[0]?<DebitCard_Details/>:<Bank_Transfer/>}</div>
        </div>
    )
}

export default PaymentInput;