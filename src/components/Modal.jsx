import { X } from "lucide-react";
import { useState } from "react";

function Modal({ setModal }) {
    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        phone: '',
        city: '',
        income: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const botToken = "7229076761:AAGQp6ATzi0FoAzSH8CbQMguHUHIky-CQeg";
        const chatId = "@kzturbo";

        // Формируем текст сообщения
        const message = `
            Новая заявка:
            - Ф.И.О: ${formData.fullName}
            - Дата рождения: ${formData.birthDate}
            - Номер телефона: ${formData.phone}
            - Город проживания: ${formData.city}
            - Месячный доход: ${formData.income}
        `;

        // Отправка данных в Telegram
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
        <div
            onClick={() => setModal(false)}
            className="flex z-[100] items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="wmn:w-[50%] z-[100] lgbvp:w-[70%] mdbvp:w-[85%] w-full px-7 bg-transparent text-[#b0b0b0] rounded-[20px] flex flex-col items-center justify-center"
            >
                <div className="flex z-[100] flex-row wmn:w-[70%] lgbvp:w-[80%] mdbvp:w-[90%] w-full mt-[10px] justify-between">
                    <div className="z-[100] w-[10px]"></div>
                    <div onClick={() => setModal(false)} className="flex z-[100] items-center justify-center smbvp:w-[40px] w-[20px] smbvp:h-[40px] h-[20px] flex-row bg-[#06A6C9] cursor-pointer rounded-full">
                        <X width={40} height={40} color="#ffffff"/>
                    </div>
                </div>
                <div className="mdbvp:w-[60%] smbvp:w-[80%] w-[90%] bg-white text-[#247C90] mx-auto mdbvp:p-6 px-2 py-4 border-2 border-[#05A5C8] rounded-lg shadow-md mb-[50px]">
                    <form onSubmit={handleSubmit} className="space-y-4 mb-[20px]">
                        <div>
                            <label className="block text-[#05A5C8] mb-1">Ф.И.О:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#247C90]00"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Дата рождения:</label>
                            <input
                                type="text"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#247C90]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Номер телефона:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#247C90]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Город проживания:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#247C90]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Месячный доход:</label>
                            <input
                                type="text"
                                name="income"
                                value={formData.income}
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#247C90]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[30%] mdbvp:text-[16px] text-[12px] bg-[#05A5C8] text-white font-bold py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-[#247C90] focus:ring-opacity-50"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
