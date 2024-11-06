import {Kassa, KreditByuro, Mastercard, NewPay, VisaLogo} from "./Icons";

function PaymentInfo() {
    return (
        <div className="flex items-center xl:mt-[450px] wmn:mt-[130px] lg:mt-[70px] mdbvp:mt-[30px] md:mt-[200px] mt-[120px] z-[10] justify-between lgbvp:px-[140px] lg:px-[70px] md:px-[40px] px-[5px]">
            <NewPay className="z-10"/>
            <Mastercard className="z-10"/>
            <VisaLogo className="z-10"/>
            <KreditByuro className="z-10"/>
            <Kassa className="z-10"/>
        </div>
    )
}

export default PaymentInfo;