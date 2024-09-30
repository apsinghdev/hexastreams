import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { DestinationsBody } from './DestinationsBody';

export const Destinations = () => {
    return (
        <div className="w-full h-[85%]">
            <div id="destinationsHeadDiv" className="w-full h-[25%] lg:h-[20%] xl:h-[15%]">
                <div id="buttonDiv" className="flex justify-items-start space-x-3 h-[70%]">
                    <button className="text-white h-[65%] lg:h-[90%] xl:h-[70%] w-[40%] md:w-[20%] lg:w-[20%] xl:w-[33%] bg-gradus-blue rounded-lg flex items-center font-bold text-sm justify-center md:text-lg lg:text-xl lg:font-semibold">
                        <FaPlus className="text-white mr-2 w-4 h-4" />
                        Add Channel
                    </button>
                    <div className='border-2 rounded-lg p-1 h-[65%] lg:h-[90%] xl:h-[70%] w-[40%] md:w-[20%] lg:w-[20%] xl:w-[33%] flex items-center text-sm justify-center'>
                        <MdEdit className="text-white w-4 h-4 mr-2 lg:text-xl lg:font-semibold" />
                        <p className='text-white flex items-center font-bold text-sm justify-center text-sm lg:text-xl lg:font-semibold'>Update Titles</p>
                    </div>
                </div>
                <div id="infoDiv" className='flex justify-between'>
                    <p className='text-white'><span className='font-bold'>0 of 2</span> active</p>
                    <p className='text-white font-thin text-slate-600'>Toggle all <spac>OFF | ON</spac></p>
                </div>
            </div>
            <DestinationsBody />
        </div>
    )
}