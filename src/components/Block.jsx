function Block({maintext, firsttext, sectext, number}){
    return (
        <div className="border-[3px] z-10 xs:w-[300px] w-[280px] lgbvp:h-[187px] h-[140px] border-cyan-400 rounded-lg px-[22px] pt-[21px] pb-[37px] shadow-lg flex flex-col relative text-gray-700 bg-white bg-gradient-to-b from-white via-gray-100 to-white">
            <h2 className="text-[25px] z-10 font-bold text-black">{maintext}</h2>
            <div className="lgbvp:mt-[40px] smbvp:text-[16px] text-[12px] mt-[5px] z-10 font-normal">
                <p>{firsttext}</p>
                <p>{sectext}</p>
            </div>
            <span className="text-[130px] font-bold bg-gradient-to-b from-[#ADE9F6] to-white bg-clip-text text-transparent absolute top-[-30px] right-4">{number}</span>
        </div>
    )
}

export default Block;