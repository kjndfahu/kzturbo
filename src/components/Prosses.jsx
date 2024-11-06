import block from "../assets/block.png"

function Prosses({setModal}) {
    return (
        <div
            className="flex flex-col mt-[150px] lgbvp:gap-[30px] gap-[15px] mdbvp:pt-[139px] pt-[80px] pb-[40px] bg-cover bg-center bg-no-repeat w-full items-center justify-center"
            style={{
                backgroundImage: `url('https://i.imgur.com/73XuowH.png')`,
            }}>
            <div className="absolute xl:top-[1850px] lgbvp:top-[1525px] mdbvp:top-[1770px] md:top-[1870px] smbvp:top-[1700px] top-[1660px] font-black">
                <div className="flex flex-col z-[1] gap-1 absolute lg:left-[150px] mdbvp:left-[100px] md:left-[70px] smbvp:left-[75px] left-[50px] lg:top-[80px] md:top-[45px] smbvp:top-[30px] top-[27px]">
                    <h2 className="flex text-white  lg:leading-[45px] lg:text-[35px] mdbvp:text-[25px] md:text-[19px] md:leading-[22px] mdbvp:leading-[30px] smbvp:text-[18px] text-[17px] leading-[18px] smbvp:leading-[22px]">Первый займ <br/> бесплатно!</h2>
                    <p className="font-normal text-white lg:text-[16px] mdbvp:text-[12px] md:text-[10px] md:leading-[13px] mdbvp:leading-[18px] smbvp:text-[11px] text-[9px] leading-[11px] smbvp:leading-[13px] lg:leading-[22px]">При условии возврата  <span className="underline">в срок</span> </p>
                    <div onClick={() => setModal(true)} className="mdbvp:flex  hidden items-center lg:text-[16px] text-[12px] rounded-[6px] cursor-pointer text-[#05A5C8] justify-center lg:w-[210px] lg:h-[41px] w-[150px] h-[31px] bg-[#FFF800]">ПОЛУЧИ БЕСПЛАТНО</div>
                </div>
                <img className="lg:w-[947px] lg:h-[295px] mdbvp:w-[600px] mdbvp:h-[190px] md:w-[420px] md:h-[140px] smbvp:w-[390px] w-[300px] h-[100px] smbvp:h-[120px] z-[11]" src={block} alt=""/>
            </div>
            <div className="flex mdbvp:flex-row items-center flex-col lgbvp:gap-[30px] gap-[15px]">
                <div
                    onClick={() => setModal(true)}
                    className="flex z-[1] mdbvp:hidden font-black items-center lg:text-[16px] text-[12px] rounded-[6px] text-[#05A5C8] justify-center cursor-pointer lg:w-[210px] lg:h-[41px] w-[210px] h-[41px] bg-[#FFF800]">ПОЛУЧИ
                    БЕСПЛАТНО
                </div>
                <div
                    className="flex flex-col px-[27px] sm:py-[30px] py-[15px] bg-white lgbvp:w-[397px] sm:w-[340px] xs:w-[305px] w-[280px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">Удобное
                        погашение</h1>
                    <p className="w-[70%]">15 способов погашения займов: банковской картой, онлайн-кошельки и др.</p>
                </div>
                <div
                    className="flex flex-col px-[27px] sm:py-[30px] py-[15px] bg-white lgbvp:w-[397px] sm:w-[340px] xs:w-[305px] w-[280px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">Быстрые
                        переводы</h1>
                    <div className="flex flex-row items-center gap-[10px]">
                        <p>Деньги у вас в течение</p>
                        <div
                            className="bg-[#05A5C8] text-white rounded-[3px] px-[7px] py-[4px] font-black leading-[25px]">5
                            минут
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mdbvp:flex-row flex-col lgbvp:gap-[30px] gap-[15px]">
                <div
                    className="flex flex-col px-[27px] sm:py-[30px] py-[15px] bg-white lgbvp:w-[397px] sm:w-[340px] xs:w-[305px] w-[280px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">На любой счет</h1>
                    <p className="w-[70%]">Вы сами выбираете способ получения: переводом на карту или онлайн-кошелек</p>
                </div>
                <div
                    className="flex flex-col px-[27px] sm:py-[30px] py-[15px] bg-white lgbvp:w-[397px] sm:w-[340px] xs:w-[305px] w-[280px] gap-[5px] lgbvp:h-[181px] sm:h-[165px] h-[145px] rounded-[15px] text-[#505050] lgbvp:text-[16px] text-[14px]">
                    <h1 className="font-extrabold lg:text-[25px] lg:leading-[35px] text-[20px] leading-[30px] text-black">Высокий % одобрения</h1>
                    <p className="w-[70%]">Одобряем более 90% заявок</p>
                </div>
            </div>
        </div>
    )
}

export default Prosses;