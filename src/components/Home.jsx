import Hero from "./Hero";
import bg from "../assets/Grouddd.png";
import PaymentInfo from "./PaymentInfo";
import ThreeSteps from "./ThreeSteps";
import Prosses from "./Prosses";
import Info from "./Info";
import LeaveRequest from "./LeaveRequest";
import TwoBlocks from "./TwoBlocks";


function Home() {
    return (
        <div className="w-full">

            <div style={{
                backgroundImage: `url(${bg})`,
            }} className="absolute z-[1] xl:h-[1200px] lgbvp:h-[860px] lg:h-[690px] mdbvp:h-[550px] sm:left-0 xs:left-[-50px] left-[-100px] md:h-[400px] h-[320px] bg-cover sm:w-full xs:w-[109vw] w-[135%] top-[-10px] bg-[#05A5C8]"></div>
            {/*<Girl className="absolute z-[10] bg-cover w-full top-[150px] "/>*/}
            <TwoBlocks/>
            <ThreeSteps/>
            <Prosses/>
            <Info/>
            <LeaveRequest/>
        </div>
    )
}

export default Home;