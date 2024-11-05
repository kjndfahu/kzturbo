import { X } from "lucide-react";
import {useState} from "react";

function Modal({setModal}){
    const [formData, setFormData] = useState({
        fullName: 'Смирнов Альберт',
        birthDate: '12.02.1994',
        phone: '+7 740 42 903',
        city: 'Алматы',
        income: '200 000',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div onClick={() => setModal(false)}
             className="flex z-[50] items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[50%] gap-5 px-7 bg-white text-[#b0b0b0] rounded-[20px] flex flex-col items-center justify-center"
            >
                <div className="flex flex-row w-full mt-[10px] justify-between">
                    <div className="w-[10px]"></div>
                    <div onClick={() => setModal(false)} className="flex flex-row bg-[#06A6C9] cursor-pointer rounded-full">
                        <X width={40} height={40} color="#ffffff"/>
                    </div>
                </div>
                <div className="w-[60%] mx-auto p-6 border-2 border-[#05A5C8] rounded-lg shadow-md mb-[50px]">
                    <form onSubmit={handleSubmit} className="space-y-4 mb-[20px]">
                        <div>
                            <label className="block text-[#05A5C8] mb-1">Ф.И.О:</label>
                            <input
                                type="text"
                                name="fullName"
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Дата рождения:</label>
                            <input
                                type="text"
                                name="birthDate"
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Номер телефона:</label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Город проживания:</label>
                            <input
                                type="text"
                                name="city"
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-[#05A5C8] mb-1">Месячный доход:</label>
                            <input
                                type="text"
                                name="income"
                                onChange={handleChange}
                                className="w-full border border-[#05A5C8] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[30%] bg-[#05A5C8] text-white font-bold py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;