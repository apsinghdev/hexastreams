import { BiLayer } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

export const ChatHeader = () => {
    return (
        <div className="w-full h-[10%] flex justify-end space-x-3 md:space-x-9">
            <div className='flex items-center space-x-1 justify-center'>
                <BiLayer className="text-slate-400 w-5 h-5 font-bold" />
                <p className='text-slate-400 font-bold'>Chat Overlay</p>
            </div>
            <div className='flex items-center space-x-1 justify-center'>
                <AiOutlineSetting className="text-slate-400 w-5 h-5 font-bold" />
                <p className='text-slate-400 font-bold'>Settings</p>
            </div>
        </div>
    )
}