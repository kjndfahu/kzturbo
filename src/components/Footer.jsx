import {Telegram, WhatsUp} from "./Icons";

function Footer(){
    return (
        <div className="flex mdbvp:flex-row mdbvp:gap-0 gap-[40px] flex-col justify-between pl-[77px] pr-[120px] bg-[#05A5C8] text-white pt-[60px] pb-[64px]">
            <div className="flex mdbvp:flex-row flex-col justify-start ftr:gap-[130px] lg:gap-[40px] mdbvp:gap-[15px] gap-[40px]">
                <div className="flex flex-col mdbvp:text-left text-center  font-medium ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px] leading-[30px] ftr:leading-[30px] mdbvp:leading-[20px] gap-[7px] ">
                    <h2 className="ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px] leading-[30px] font-black ftr:leading-[30px] mdbvp:leading-[20px] mb-[5px]">О нас</h2>
                    <h2>Безопасность и грамотность</h2>
                    <h2>Документы</h2>
                    <h2>Пресс-центр</h2>
                    <h2>Контакты</h2>
                    <h2>Вакансии</h2>
                </div>
                <div className="flex flex-col font-medium mdbvp:text-left text-center ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px] leading-[30px] ftr:leading-[30px] mdbvp:leading-[20px] gap-[7px] ">
                    <h2 className="ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px] leading-[30px] font-black ftr:leading-[30px] mdbvp:leading-[20px] mb-[5px]">Как получить</h2>
                    <h2>На карту</h2>
                    <h2>На кошелек</h2>
                    <h2>На банковский счет</h2>
                </div>
                <div className="flex flex-col font-medium mdbvp:text-left text-center ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px] leading-[30px] ftr:leading-[30px] mdbvp:leading-[20px] gap-[7px] ">
                    <h2 className="ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px] leading-[30px] font-black ftr:leading-[30px] mdbvp:leading-[20px] mb-[5px]">Как погасить</h2>
                    <h2>Вопросы и ответы</h2>
                    <h2>Пожаловаться</h2>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] mdbvp:text-left text-center ftr:text-[20px] lg:text-[15px] mdbvp:text-[13px] text-[20px]  font-black">
                <h2>Связь с нами</h2>
                <div className="flex mdbvp:justify-start justify-center flex-row gap-[18px]">
                    <Telegram className="lgbvp:w-[58px] lgbvp:h-[58px] mdbvp:w-[40px] mdbvp:h-[40px] w-[58px] h-[58px]"/>
                    <WhatsUp className="lgbvp:w-[58px] lgbvp:h-[58px] mdbvp:w-[40px] mdbvp:h-[40px] w-[58px] h-[58px]"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;