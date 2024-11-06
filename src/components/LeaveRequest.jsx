import woman from '../assets/woman.png';
import { useState } from 'react';

function LeaveRequest() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const botToken = "7229076761:AAGQp6ATzi0FoAzSH8CbQMguHUHIky-CQeg"; // Замените на ваш токен бота
        const chatId = "@kzturbo";

        // Формируем текст сообщения
        const message = `
            Новая заявка:
            - Имя: ${formData.fullName}
            - Номер телефона: ${formData.phone}
        `;

        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
            console.log('Form submitted:', formData);
            alert("Данные успешно отправлены в Telegram!");
        } catch (error) {
            console.error("Ошибка при отправке данных в Telegram:", error);
            alert("Ошибка при отправке данных. Пожалуйста, попробуйте позже.");
        }
    };

    return (
        <div className="flex w-[90%] bg-[#05A5C8] md:mt-[80px] mt-[26px] lg:px-[77px] md:px-[40px] px-[19px] mb-[23px] rounded-r-[30px] pt-[24px] text-white">
            <div className="flex flex-col">
                <h1 className="font-black mdbvp:text-[32px] text-[18px] leading-[48px]">Оставить заявку</h1>
                <p className="mdbvp:text-[18px] text-[16px]">Наш оператор с вами свяжется в самое быстрое время </p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex lg:flex-row flex-col lg:gap-[40px] gap-[13px] pt-[18px] text-[#737373]">
                        <input
                            value={formData.fullName}
                            name="fullName"
                            onChange={handleChange}
                            className="flex px-[16px] py-[15px] rounded-[5px] md:w-[300px]"
                            placeholder="Имя"
                            type="text"
                        />
                        <input
                            value={formData.phone}
                            name="phone"
                            onChange={handleChange}
                            className="flex px-[16px] py-[15px] rounded-[5px] md:w-[300px]"
                            placeholder="Номер телефона"
                            type="text"
                        />
                    </div>
                    <button
                        type="submit"
                        className="my-[30px] flex items-center rounded-[5px] py-[10px] w-[150px] justify-center bg-[#FFF800] text-[#05A5C8] font-black"
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <img
                className="lgbvp:flex hidden absolute ftr:w-[688px] w-[500px] ftr:h-[526px] h-[380px] xlbvp:left-[800px] wmn:left-[650px] ftr:left-[600px] left-[580px] xlbvp:top-[2900px] wmn:top-[2650px] ftr:top-[2600px] lgbvp:top-[2800px] top-[3350px]"
                src={woman}
                alt=""
            />
        </div>
    );
}

export default LeaveRequest;
