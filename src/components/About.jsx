import AboutCompany from "./AboutCompany";

function About() {
    return (
        <div className="w-full bg-[#f7f7f7]">
            <div className="flex font-bold lg:text-[20px] text-[16px] mdbvp:px-[70px] px-[25px] pt-[40px]">
                <h2 className="text-[#818181]">Микрокредиты > </h2>
                <h2 className="text-[#3c3c3c]">&nbsp;О нас</h2>
            </div>
            <AboutCompany/>
        </div>
    )
}

export default About;