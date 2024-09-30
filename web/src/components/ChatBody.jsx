export const ChatBody = () => {

    return (
        <div className="text-white rounded-lg shadow-lg w-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <div className="bg-red-500 rounded-md w-6 h-6 flex items-center justify-center">
                        <span className="font-bold">H</span>
                    </div>
                    <span className="font-semibold">Hexastream</span>
                </div>
                <span className="text-gray-400 text-sm">11:05:23</span>
            </div>

            <p className="text-sm mb-4">
                Read & reply to messages from multiple platforms here.
            </p>
        </div>
    );
};