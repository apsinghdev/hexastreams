import { FiChevronLeft } from "react-icons/fi";
import { FaArrowCircleUp } from 'react-icons/fa';

export const TopNavbar = () => {
    return (
        <div className="flex items-center space-x-3">
            <button className="bg-prussian-blue rounded-lg p-2 bold text-lg">
                <FiChevronLeft className="text-white w-6 h-6 stroke-2" />
            </button>
            <p className="text-white text-xl font-semibold">Encoder</p>
            <div className="flex items-center justify-center space-x-1 text-sm font-bold text-pale-blue gradient-border w-24 h-6">
                <p>Upgrade</p>
                <FaArrowCircleUp />
            </div>
        </div>
    )
}