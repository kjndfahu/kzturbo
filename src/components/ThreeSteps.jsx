import Block from "./Block";
import {RightArrow} from "./Icons";

function ThreeSteps() {
    return (
        <div className="flex flex-col z-[1] mt-5 items-center justify-center font-bold">
            <h1 className="text-[#05A5C8] lg:leading-[67px] smbvp:leading-[45px] leading-[33px] z-[1] lg:text-[45px] smbvp:text-[35px] text-[20px]">3 простых шага</h1>
            <h2 className="lg:text-[40px] smbvp:text-[30px] text-[20px] z-[1] lg:leading-[60px] smbvp:leading-[45px] leading-[30px]">До получения  денег</h2>
            <div className="flex lgbvp:flex-row flex-col z-[1] items-center xl:gap-[41px] lgbvp:gap-[15px] gap-[36px] mt-[42px]">
                <Block  maintext={"Заявка"} firsttext={"Подайте заявку."} sectext={"Нужен только номер телефона"} number={"1"}/>
                <RightArrow className="lgbvp:flex hidden"/>
                <Block maintext={"Решение"} firsttext={"Дождитесь ответа"} sectext={"нашего оператора"} number={"2"}/>
                <RightArrow className="lgbvp:flex hidden"/>
                <Block maintext={"Деньги"} firsttext={"Получите деньги "} sectext={"на карту или кошелек"} number={"3"}/>
            </div>
        </div>
    )
}

export default ThreeSteps;