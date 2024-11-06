import woman from '../assets/woman.png'
function LeaveRequest() {
    return (
        <div className="flex w-[90%] bg-[#05A5C8] md:mt-[80px] mt-[26px] lg:px-[77px] md:px-[40px] px-[19px] mb-[23px] rounded-r-[30px] pt-[24px] text-white">
            <div className="flex flex-col">
                <h1 className="font-black mdbvp:text-[32px] text-[18px] leading-[48px]">Оставить заявку</h1>
                <p className="mdbvp:text-[18px] text-[16px]">Наш оператор с вами свяжется в самое быстрое время </p>
                <div className="flex lg:flex-row flex-col lg:gap-[40px] gap-[13px] pt-[18px] text-[#737373]">
                    <input className="flex px-[16px] py-[15px] rounded-[5px] md:w-[300px]" placeholder="Имя" type="text"/>
                    <input className="flex px-[16px] py-[15px] rounded-[5px] md:w-[300px]" placeholder="Номер телефона" type="text"/>
                </div>
                <div className="my-[30px] flex items-center rounded-[5px] py-[10px] w-[150px] justify-center bg-[#FFF800] text-[#05A5C8] font-black">Отправить</div>
            </div>
            <img className="lgbvp:flex hidden absolute ftr:w-[688px] w-[500px] ftr:h-[526px] h-[380px] xlbvp:left-[1100px] wmn:left-[650px] ftr:left-[500px] left-[580px] xlbvp:top-[2840px] wmn:top-[2950px] ftr:top-[2980px] lgbvp:top-[3200px] top-[3350px]" src={woman} alt=""/>
        </div>
    )
}

export default LeaveRequest;