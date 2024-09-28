import { FiChevronDown } from 'react-icons/fi';
import imgPath from "../assets/coding-man.jpg"

export const UserProfile = () => {
    return (
        <div className='flex items-center space-x-3'>
            <img src={imgPath} className="rounded-full object-cover h-9 w-9 ml-4"></img>
            <div>
                <p className='text-white bold text-sm font-bold'>ajeetpratap517@gmail....</p>
                <p className='text-slate-600 text-[#6B778B] font-thin text-sm'>Personal • Basic</p>
            </div>
            <FiChevronDown className={`text-[#6B778B] w-5 h-5 stroke-2`} ></FiChevronDown>
        </div>
    )
}