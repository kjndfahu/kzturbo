import AboutCompany from "./AboutCompany";
import {Link} from "react-router-dom";

function About() {
    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="flex font-bold lg:text-[20px] text-[16px] mdbvp:px-[70px] sm:px-[25px] px-[10px] pt-[40px]">
                <Link to="/">
                    <h2 className="text-[#818181]">Главная > </h2>
                </Link>
                <h2 className="text-[#3c3c3c]">&nbsp;О нас</h2>
            </div>
            <AboutCompany/>
        </div>
    )
}

export default About;