import {Telegram, WhatsUp} from "./Icons";

function Footer(){
    return (
        <div className="flex flex-row justify-between pl-[77px] pr-[120px] bg-[#05A5C8] text-white pt-[60px] pb-[64px]">
            <div className="flex justify-start gap-[130px]">
                <div className="flex flex-col font-medium text-[20px] leading-[30px] gap-[7px] ">
                    <h2 className="text-[20px] font-black leading-[30px] mb-[5px]">О нас</h2>
                    <h2>Безопасность и грамотность</h2>
                    <h2>Документы</h2>
                    <h2>Пресс-центр</h2>
                    <h2>Контакты</h2>
                    <h2>Вакансии</h2>
                </div>
                <div className="flex flex-col font-medium text-[20px] leading-[30px] gap-[7px] ">
                    <h2 className="text-[20px] font-black leading-[30px] mb-[5px]">Как получить</h2>
                    <h2>На карту</h2>
                    <h2>На кошелек</h2>
                    <h2>На банковский счет</h2>
                </div>
                <div className="flex flex-col font-medium text-[20px] leading-[30px] gap-[7px] ">
                    <h2 className="text-[20px] font-black leading-[30px] mb-[5px]">Как погасить</h2>
                    <h2>Вопросы и ответы</h2>
                    <h2>Пожаловаться</h2>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] text-[20px] font-black">
                <h2>Связь с нами</h2>
                <div className="flex flex-row gap-[18px]">
                    <Telegram/>
                    <WhatsUp/>
                </div>
            </div>
        </div>
    )
}

export default Footer;