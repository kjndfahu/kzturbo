import {Kassa, KreditByuro, Mastercard, NewPay, VisaLogo} from "./Icons";

function PaymentInfo() {
    return (
        <div className="flex items-center mt-[450px] z-[10] justify-between lgbvp:px-[140px] lg:px-[70px] md:px-[40px] px-[5px]">
            <NewPay className="z-10"/>
            <Mastercard className="z-10"/>
            <VisaLogo className="z-10"/>
            <KreditByuro className="z-10"/>
            <Kassa className="z-10"/>
        </div>
    )
}

export default PaymentInfo;