function LeaveRequest() {
    return (
        <div className="flex w-[90%] bg-[#05A5C8] mt-[80px] px-[77px] rounded-r-[30px] pt-[24px] text-white">
            <div className="flex flex-col">
                <h1 className="font-black text-[32px] leading-[48px]">Оставить заявку</h1>
                <p>Наш оператор с вами свяжется в самое быстрое время </p>
                <div className="flex flex-row gap-[40px] pt-[18px] text-[#737373]">
                    <input className="flex px-[16px] py-[15px] rounded-[5px] w-[300px]" placeholder="Имя" type="text"/>
                    <input className="flex px-[16px] py-[15px] rounded-[5px] w-[300px]" placeholder="Номер телефона" type="text"/>
                </div>
                <div className="my-[30px] flex items-center rounded-[5px] py-[10px] w-[150px] justify-center bg-[#FFF800] text-[#05A5C8] font-black">Отправить</div>
            </div>
        </div>
    )
}

export default LeaveRequest;