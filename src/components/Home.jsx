import Header from "./Header";
import Hero from "./Hero";
import bg from "../assets/Group16.png";
import {Girl} from "./Icons";
import PaymentInfo from "./PaymentInfo";
import ThreeSteps from "./ThreeSteps";
import Prosses from "./Prosses";
import Info from "./Info";
import LeaveRequest from "./LeaveRequest";
import Footer from "./Footer";
import SecFooter from "./SecFooter";

function Home() {
    return (
        <div className="w-full">
            <Hero/>
            <img className="absolute z-[1] bg-cover w-full top-[-100px] " src={bg} alt=""/>
            {/*<Girl className="absolute z-[10] bg-cover w-full top-[150px] "/>*/}
            <PaymentInfo/>
            <ThreeSteps/>
            <Prosses/>
            <Info/>
            <LeaveRequest/>
        </div>
    )
}

export default Home;