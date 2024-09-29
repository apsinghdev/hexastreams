import { FiChevronLeft } from "react-icons/fi";
import { FaArrowCircleUp } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export const TopNavbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signin");
    }
    return (
        <div className="flex items-center space-x-3">
            <button className="bg-prussian-blue rounded-lg p-2 bold text-lg" onClick={handleClick}>
                <FiChevronLeft className="text-white w-6 h-6 stroke-2" />
            </button>
            <p className="text-white text-xl font-semibold">Encoder</p>
            <div className="hidden md:block lg:block flex items-center justify-center space-x-1 text-sm font-bold text-pale-blue gradient-border w-24 h-6 pl-2.5">
                <p className="inline">Upgrade</p>
                <FaArrowCircleUp className="inline-block" />
            </div>
        </div>
    )
}