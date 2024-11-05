import Block from "./Block";
import {RightArrow} from "./Icons";

function ThreeSteps() {
    return (
        <div className="flex flex-col mt-5 items-center justify-center font-bold">
            <h1 className="text-[#05A5C8] leading-[67px] text-[45px]">3 простых шага</h1>
            <h2 className="text-[40px] leading-[60px]">До получения  денег</h2>
            <div className="flex items-center gap-[41px] mt-[42px]">
                <Block maintext={"Заявка"} firsttext={"Подайте заявку."} sectext={"Нужен только номер телефона"} number={"1"}/>
                <RightArrow/>
                <Block maintext={"Решение"} firsttext={"Дождитесь ответа"} sectext={"нашего оператора"} number={"2"}/>
                <RightArrow/>
                <Block maintext={"Деньги"} firsttext={"Получите деньги "} sectext={"на карту или кошелек"} number={"3"}/>
            </div>
        </div>
    )
}

export default ThreeSteps;