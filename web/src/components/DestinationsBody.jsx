import { FaPlus } from 'react-icons/fa';

export const DestinationsBody = () => {
    return (
        <div className="w-full h-[75%]">
            <div id="destiantionsBody" className="flex justify-center items-center h-[80%]">
                <img src="https://app.restream.io/static/media/squid.c45817fa20e672cc3f16.png" className="h-[150px] w-[120px] xl:h-[180px] xl:w-[150px] xl:mt-7"></img>
            </div>
            <div id="destinationsFooter" className='flex justify-center items-center h-[15%]'>
                <button className="text-white h-[80%] lg:h-[90%] xl:h-[75%] w-[50%] md:w-[20%] lg:w-[20%] xl:w-[36%] bg-gradus-blue rounded-lg flex items-center font-bold text-sm justify-center md:text-lg lg:text-xl lg:font-semibold">
                    <FaPlus className="text-white mr-2 w-4 h-4" />
                    Add First Channel
                </button>
            </div>
        </div>
    )
}