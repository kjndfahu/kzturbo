function Prosses() {
    return (
        <div
            className="flex flex-col mt-[150px] lgbvp:gap-[30px] gap-[20px] pt-[139px] pb-[40px] bg-cover bg-center bg-no-repeat w-full items-center justify-center"
            style={{
                backgroundImage: `url('https://i.imgur.com/73XuowH.png')`,
            }}>
            <div className="flex mdbvp:flex-row flex-col lgbvp:gap-[30px] gap-[15px]">
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white lgbvp:w-[397px] sm:w-[340px] w-[317px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">Удобное погашение</h1>
                    <p className="w-[70%]">15 способов погашения займов: банковской картой, онлайн-кошельки и др.</p>
                </div>
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white lgbvp:w-[397px] sm:w-[340px] w-[317px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">Быстрые переводы</h1>
                    <div className="flex flex-row items-center gap-[10px]">
                        <p>Деньги у вас в течение</p>
                        <div className="bg-[#05A5C8] text-white rounded-[3px] px-[7px] py-[4px] font-black leading-[25px]">5 минут</div>
                    </div>
                </div>
            </div>

            <div className="flex mdbvp:flex-row flex-col lgbvp:gap-[30px] gap-[15px]">
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white lgbvp:w-[397px] sm:w-[340px] w-[317px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">На любой счет</h1>
                    <p className="w-[70%]">Вы сами выбираете способ получения: переводом на карту или онлайн-кошелек</p>
                </div>
                <div
                    className="flex flex-col px-[27px] py-[30px] bg-white lgbvp:w-[397px] sm:w-[340px] w-[317px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">Высокий % одобрения</h1>
                    <p className="w-[70%]">Одобряем более 90% заявок</p>
                </div>
            </div>
        </div>
    )
}

export default Prosses;