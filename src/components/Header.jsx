import {MainLogo} from "./Icons";

function Header() {
    return (
        <div className="flex items-center gap-[70px] w-full bg-[#05A5C8] pt-[34px] px-[62px]">
            <MainLogo/>
            <div className="flex gap-[50px] font-sans font-bold text-[20px] text-white">
                <h2>О нас</h2>
            </div>
        </div>
    )
}

export default Header;