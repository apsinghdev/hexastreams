import { ChevronDown, Send, AlertTriangle } from 'lucide-react';
import React, { useState } from 'react';

export const ChatFooter = () => {
    const [message, setMessage] = useState('');
    return (
        <div className="text-white rounded-lg shadow-lg w-full mt-20 h-[40%] xl:h-[20%] xl:pt-64">
            <div className="bg-[#172554] p-1 rounded-md w-full flex items-start space-x-2 mb-1 mt-3">
                <AlertTriangle className="text-white flex-shrink-0" size={20} />
                <p className="text-sm text-white">
                    To activate chat, please enable channels <span className="underline text-red-800">here</span>
                </p>
            </div>

            <div className="flex items-center rounded-b-md rounded-t-none rounded-l-md rounded-r-md w-full pt-5 border-t">
                <div className="p-2">
                    <ChevronDown className="text-gray-400" size={20} />
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="bg-transparent flex-grow px-2 py-1 focus:outline-none text-sm"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="p-2">
                    <Send className="text-blue-500" size={20} />
                </button>
            </div>
        </div>
    )
}