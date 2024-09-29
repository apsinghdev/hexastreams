import { AiOutlinePlayCircle } from 'react-icons/ai';

export const EncoderControlsContainer = () => {
    return (
        <div className='flex flex-col items-center md:w-[50%] w-3/4 h-full'>
            <div className='flex flex-col items-center space-y-2 md:pt-12'>
                <p className='text-white hidden md:text-3xl font-semibold md:inline'>Set Up Your Live Stream</p>
                <p className='text-white text-sm text-slate-400 pt-3 md:text-xl lg:text-lg md:p-0'>Copy and paste <span className='hidden md:inline'> RTMP settings</span> into your streaming software.</p>
            </div>
            <form>
                <div></div>
                <div></div>
            </form>
            <div>
                <AiOutlinePlayCircle />
                <p>Explore how to connect OBS, Zoom, vMix</p>
            </div>
        </div>
    )
} 