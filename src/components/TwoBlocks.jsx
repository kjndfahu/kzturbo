import Hero from "./Hero";
import PaymentInfo from "./PaymentInfo";

function TwoBlocks({modal, setModal}) {
    return (
        <div className="flex mdbvp:flex-col flex-col-reverse">
            <Hero modal={modal} setModal={setModal}/>
            <PaymentInfo/>
        </div>
    )
}

export default TwoBlocks;