import {MainLogo} from "./Icons";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="flex z-[10] items-center lg:gap-[70px] gap-[35px] w-full bg-[#05A5C8] pt-[34px] pb-[40px] mdbvp:px-[62px] sm:px-[25px] px-[10px]">
            <Link className="z-[10]" to="/">
                <MainLogo className="lgbvp:w-[283px] w-[180px] z-10"/>
            </Link>
            <div className="md:flex hidden lg:gap-[50px] gap-[20px] z-10 font-sans font-bold lg:text-[20px] mdbvp:text-[15px] text-[12px] text-white">
                <Link to="/about">
                    <h2>О нас</h2>
                </Link>
                <Link to="/notfound">
                    <h2>Как получить</h2>
                </Link>
                <Link to="/notfound">
                    <h2>Как погасить</h2>
                </Link>
                <Link to="/notfound">
                    <h2>Вопросы и ответы</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header;