import Hero from "./Hero";
import PaymentInfo from "./PaymentInfo";

function TwoBlocks() {
    return (
        <div className="flex mdbvp:flex-col flex-col-reverse">
            <Hero/>
            <PaymentInfo/>
        </div>
    )
}

export default TwoBlocks;