import {Kassa, KreditByuro, Mastercard, NewPay, VisaLogo} from "./Icons";

function PaymentInfo() {
    return (
        <div className="flex items-center justify-between px-[140px] ">
            <NewPay/>
            <Mastercard/>
            <VisaLogo/>
            <KreditByuro/>
            <Kassa/>
        </div>
    )
}

export default PaymentInfo;