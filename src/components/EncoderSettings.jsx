import { AiOutlinePlayCircle } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { BiCode } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

export const EncoderSettings = () => {
    return (
        <div className='w-full xl:w-[65rem] h-1/3 lg:h-1/2 xl:h-[40rem] flex flex-col'>
            <div className='bg-black rounded-xl h-[95%]'>
                <div>
                    <p>Set Up Your Hexastream</p>
                    <p>Copy and paste RTMP settings into your streaming software.</p>
                </div>
                <form></form>
                <div>
                    <AiOutlinePlayCircle />
                    <p>Explore how to connect OBS, Zoom, vMix</p>
                </div>
            </div>
            <div className='flex items-center justify-between space-x-3 mt-3 pr-4'>
                <div>
                    <button className='flex space-x-3 items-center justify-center'>
                        <span className='text-white text-lg lg:text-xl font-bold'>Live with Hexatream</span>
                        <div className='border-2 rounded-xl p-1 hidden md:block'>
                            <p className='text-white font-bold text-xs'>Music & Art</p>
                        </div>
                        <MdEdit className="text-white w-5 h-5" />
                    </button>
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <button>
                        <div className='flex items-center space-x-2 justify-center'>
                            <BiCode className="text-white w-5 h-5" ></BiCode>
                            <p className='text-white text-md lg:text-lg font-bold hidden md:block'>EMBED STREAM</p>
                        </div>
                    </button>
                    <button>
                        <div className='flex items-center space-x-2 justify-center'>
                            <AiOutlineSetting className="text-white w-5 h-5"></AiOutlineSetting>
                            <p className='text-white text-md lg:text-lg font-bold hidden md:block'>STREAM SETTINGS</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}