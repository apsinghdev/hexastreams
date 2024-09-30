export const EncoderForm = () => {
    const securityKey = "rtmp://live.hexstream.io/live";
    const maskedKey = '•'.repeat(securityKey.length);

    return (
        <form className='border-red-500 flex flex-col w-full h-auto mt-2 md:mt-20 md:space-y-4'>
            <div className="w-full">
                <label className="text-slate-400 font-bold">RTMP URL</label>
                <div className="flex items-center pt-1 h-12 md:h-14">
                    <div className="w-[78%] h-full bg-ef-black rounded-lg flex items-center pl-2 lg:w-[85%]">
                        <p className="text-white font-semibold text-sm md:text-lg lg:text-base">rtmp://live.hexstream.io/live</p>
                    </div>
                    <button className="text-white h-full w-[20%] ml-2 bg-gradus-blue rounded-lg flex items-center font-bold text-sm justify-center md:text-lg lg:text-base">Copy</button>
                </div>
            </div>
            <div className="w-full">
                <label className="text-slate-400 font-bold">Stream Key</label>
                <div className="flex items-center pt-1 h-12 md:h-14">
                    <div className="w-[78%] h-full bg-ef-black rounded-lg flex items-center pl-2 lg:w-[85%]">
                        <p className="text-white font-semibold text-sm md:text-lg lg:text-base">{maskedKey}</p>
                    </div>
                    <button className="text-white h-full w-[20%] ml-2 bg-gradus-blue rounded-lg flex items-center font-bold text-sm justify-center md:text-lg lg:text-base">Copy</button>
                </div>
            </div>
        </form>
    )
}