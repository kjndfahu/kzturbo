function Prosses() {
    return (
        <div
            className="flex flex-col mt-[150px] gap-[30px] pt-[139px] pb-[40px] bg-cover bg-center bg-no-repeat w-full items-center justify-center"
            style={{
                backgroundImage: `url('https://i.imgur.com/73XuowH.png')`,
            }}>
            <div className="flex flex-row gap-[30px]">
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white w-[397px] gap-[5px] h-[181px] rounded-[15px] text-[#505050] text-[16px]">
                    <h1 className="font-extrabold text-[25px] leading-[35px] text-black">Удобное погашение</h1>
                    <p className="w-[70%]">15 способов погашения займов: банковской картой, онлайн-кошельки и др.</p>
                </div>
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white w-[397px] gap-[5px] h-[181px] rounded-[15px] text-[#505050] text-[16px]">
                    <h1 className="font-extrabold text-[25px] leading-[35px] text-black">Быстрые переводы</h1>
                    <div className="flex flex-row items-center gap-[10px]">
                        <p>Деньги у вас в течение</p>
                        <div className="bg-[#05A5C8] text-white rounded-[3px] px-[7px] py-[4px] font-black leading-[25px]">5 минут</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-[30px]">
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white w-[397px] gap-[5px] h-[181px] rounded-[15px] text-[#505050] text-[16px]">
                    <h1 className="font-extrabold text-[25px] leading-[35px] text-black">На любой счет</h1>
                    <p className="w-[70%]">Вы сами выбираете способ получения: переводом на карту или онлайн-кошелек</p>
                </div>
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white w-[397px] gap-[5px] h-[181px] rounded-[15px] text-[#505050] text-[16px]">
                    <h1 className="font-extrabold text-[25px] leading-[35px] text-black">Высокий % одобрения</h1>
                    <p className="w-[70%]">Одобряем более 90% заявок</p>
                </div>
            </div>
        </div>
    )
}

export default Prosses;