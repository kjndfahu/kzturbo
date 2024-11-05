import {MainLogo} from "./Icons";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="flex z-[10] items-center gap-[70px] w-full bg-[#05A5C8] pt-[34px] pb-[40px] px-[62px]">
            <Link className="z-[10]" to="/">
                <MainLogo className="lgbvp:w-[283px] w-[180px] z-10"/>
            </Link>
            <div className="md:flex hidden gap-[50px] z-10 font-sans font-bold text-[20px] text-white">
                <Link to="/about">
                    <h2>О нас</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header;