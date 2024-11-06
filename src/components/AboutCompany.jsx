import React, { useState } from 'react';

const AboutCompany = () => {
    const [activeTab, setActiveTab] = useState('about'); // Инициализация активного таба

    // Обработчик для изменения активного таба
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Содержимое табов
    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div>
                        <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                            “Товарищество с ограниченной ответственностью “Микрофинансовая организация KZTurbo” №
                            02.23.0011.M. от 08.06.2023 года и работает под брендом KZTurbo на всей территории
                            Республики Казахстан. KZTurbo — это сервис предоставления микрокредитов, которое
                            осуществляется через интернет. Клиенту не нужно посещать офис компании и предоставлять
                            множество документов. Заполнение и отправка заявки не занимает более 5 минут.
                        </p>
                        <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                            При одобрении заявки мы переводим средства на личный счет клиента или его банковскую карту.
                            Заемщики могут рассчитывать на получение услуги в случае, если микрокредит понадобился
                            срочно, без необходимости предоставления залога, а также многоэтапных процессов оформления и
                            длительных проверок.
                        </p>
                        <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                            Мы лояльны по отношению к клиентам нашей компании. Команда KZTurbo постоянно совершенствует
                            свой продукт, опираясь на отзывы и пожелания пользователей сервиса.
                        </p>
                        <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                            <span className="font-semibold">Что такое микрокредиты онлайн?</span> Микрокредиты предполагают получение денег в любое время с
                            удобством для клиента — он может находиться в любой точке Республики Казахстан. Это
                            оптимальный способ получить средства, если они понадобились срочно.
                        </p>
                        <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                            <span className="font-semibold">Наша цель</span> — оперативно обрабатывать заявки клиентов и предоставлять им качественные,
                            прозрачные и понятные услуги на выгодных условиях.
                        </p>
                    </div>
                );
            case 'info':
                return (
                    <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                        Первый микрокредит выдается на 5 дней 0,01%, 10 дней 0,999%, 30 дней 0,999%. Мы позаботимся о том, чтобы Вы не переплатили.<br/>
                        <span className="font-semibold">KZTurbo</span> - это надежный и удобный сервис онлайн-микрокредитования, который ориентируется на потребности своих клиентов. Наша технологическая база позволяет обрабатывать заявки круглосуточно и предоставлять деньги максимально быстро - в течение нескольких минут. Мы ценим время наших клиентов и прилагаем все усилия, чтобы они получили качественную услугу не покидая зону своего комфорта.
                    </p>
                );
            case 'documents':
                return (
                    <p className="lgbvp:text-[16px] mdbvp:text-[14px] text-[12px] text-gray-700 mb-4">
                        Документы компании: Вся информация о лицензиях и регистрационных документах доступна по запросу.
                        Мы работаем согласно законодательству Республики Казахстан и гарантируем прозрачность наших
                        услуг.
                    </p>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col mdbvp:px-[70px] sm:px-[25px] px-[10px] mt-[50px] pb-[57px]">
            <div className="flex flex-row ld:gap-5 gap-2">
                <button
                    onClick={() => handleTabClick('about')}
                    className={`flex items-center bg-white text-gray-800 justify-center xl:text-[20px] md:text-[15px] text-[13px] py-[20px] font-bold rounded-t-[15px] xl:w-[10%] md:w-[20%] sm:w-[35%] w-[40%] `}
                >
                    О компании
                </button>
                <button
                    onClick={() => handleTabClick('info')}
                    className={`flex items-center bg-white text-gray-800 justify-center xl:text-[20px] md:text-[15px] text-[13px] py-[20px] font-bold rounded-t-[15px] xl:w-[10%] md:w-[20%] sm:w-[35%] w-[40%] `}
                >
                    Информация
                </button>
                <button
                    onClick={() => handleTabClick('documents')}
                    className={`flex items-center bg-white text-gray-800 justify-center xl:text-[20px] md:text-[15px] text-[13px] py-[20px] font-bold rounded-t-[15px] xl:w-[10%] md:w-[20%] sm:w-[35%] w-[40%] `}
                >
                    Документы
                </button>
            </div>

            <div className="bg-white p-8 rounded-lg">
                {renderContent()}
            </div>
        </div>
    );
};

export default AboutCompany;
