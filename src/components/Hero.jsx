import {useState} from "react";
import Modal from "./Modal";

function Hero({modal, setModal}) {
    const [amount, setAmount] = useState(200000);
    const [term, setTerm] = useState(8);


    const minAmount = 15000;
    const maxAmount = 200000;
    const minTerm = 5;
    const maxTerm = 21;

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    const handleInputChangeTerm = (event) => {
        setTerm(event.target.value);
    };

    console.log(modal)

    return (
        <div className="flex z-[10] mdbvp:pt-[85px] pt-0 mdbvp:px-[60px] px-[21px]">
            <div className="flex items-center flex-col z-10 border-[3px] border-[#05A5C8] mdbvp:w-[546px] w-full md:h-[648px] py-7 md:px-[50px] px-[23px] mdbvp:pt-[38px] pt-[0] pb-[25px] justify-center bg-white rounded-[21px]">
                <h2 className="md:text-[30px] text-[21px] z-10 leading-[36px] font-semibold">Первый займ <span className="text-[#05A5C8] font-black">БЕПЛАТНО</span> </h2>
                <div className="w-full mt-[15px] mb-6">
                    <div className="flex justify-between">
                        <label className="block font-medium smbvp:text-[24px] sm:text-[16px] text-[11px] text-black">Выберите сумму</label>
                        <div
                            className="flex items-center justify-center bg-[#F3F3F3] smbvp:text-xl text-[12px] smbvp:w-32 w-[100px] smbvp:h-12 h-[28px] [box-shadow:-19px_18px_6px_-17px_rgba(34,_60,_80,_0.28)_inset] rounded-lg shadow-sm text-black font-medium">
                            <input className="font-medium bg-transparent smbvp:w-[80px] w-[50px] placeholder-black text-black smbvp:text-xl text-[12px] focus:outline-none" onChange={handleInputChange} value={amount.toLocaleString()} placeholder={amount.toLocaleString()}
                                   type="number"/>
                            <span className="ml-1">₸</span>
                        </div>
                    </div>
                    <input
                        type="range"
                        min={minAmount}
                        max={maxAmount}
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full mt-2 accent-[#05A5C8]"
                    />
                    <div className="flex justify-between smbvp:text-[16px] text-[11px] font-normal text-black">
                        <span>{minAmount.toLocaleString()}₸</span>
                        <span>{maxAmount.toLocaleString()}₸</span>
                    </div>
                </div>

                <div className="w-full mb-6">
                    <div className="flex justify-between">
                        <label className="block font-medium smbvp:text-[24px] sm:text-[16px] text-[11px] text-black">Выберите срок</label>
                        <div
                            className="flex items-center justify-center bg-[#F3F3F3] smbvp:w-32 w-[100px] smbvp:h-12 h-[28px] [box-shadow:-19px_18px_6px_-17px_rgba(34,_60,_80,_0.28)_inset] rounded-lg shadow-sm text-black font-medium">
                            <input
                                className="font-medium bg-transparent smbvp:w-[25px] w-[15px] placeholder-black smbvp:text-xl text-[12px] focus:outline-none"
                                onChange={handleInputChangeTerm} value={term.toLocaleString()}
                                placeholder={term.toLocaleString()}
                                type="number"/>
                            <span className="ml-1 smbvp:text-xl text-[12px]">недель</span>
                        </div>
                    </div>

                    <input
                        type="range"
                        min={minTerm}
                        max={maxTerm}
                        value={term}
                        onChange={(e) => setTerm(Number(e.target.value))}
                        className="w-full mt-2 accent-[#05A5C8]"
                    />
                    <div className="flex justify-between smbvp:text-[16px] text-[11px] font-normal text-black">
                        <span>{minTerm} недель</span>
                        <span>{maxTerm} недель</span>
                    </div>
                </div>

                <button onClick={() => setModal(true)} className="md:w-[379px] sm:w-[250px] w-[200px] py-2 bg-[#05A5C8] md:text-[24px] sm:text-[16px] text-[12px] text-white font-black rounded-lg mb-4">
                    ПОЛУЧИТЬ БЕСПЛАТНО
                </button>

                <div className="flex flex-col gap-[13px]">
                    <p className="text-[#636060] font-normal md:text-[16px] text-[12px]">
                        Одобряем 98% заявок при оформлении займа через госуслуги
                    </p>

                    <div className="flex flex-col gap-[13px] w-[75%] mdbvp:text-[18px] smbvp:text-[15px] text-[11px] justify-between text-black">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col justify-between">
                                <span>Вы берете</span>
                                <span className="font-bold">{amount.toLocaleString()} ₸</span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <span>До (включительно)</span>
                                <span className="font-bold">
            {new Date(Date.now() + term * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')}
          </span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[20px]">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span>Вы возвращаете</span>
                                </div>
                                <div className="flex gap-2 text-[14px] font-bold">
                                    <span className="line-through text-[#979797]">240 000₸</span>
                                    <span className="font-bold text-[#05A5C8]">{amount.toLocaleString()} ₸</span>
                                </div>
                            </div>
                            <div className="flex items-center h-[31px] justify-center text-[18px] leading-5 bg-[#05A5C8] px-1 font-bold rounded-[5px] text-white">0%</div>
                        </div>
                    </div>
                </div>
            </div>

            {modal && <Modal setModal={setModal} /> }

        </div>


    )
}

export default Hero;