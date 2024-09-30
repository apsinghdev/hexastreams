export const ChannelSettingsHeader = ({ activeTab, onTabChange }) => {
    return (
        <div className="w-full h-[15%] xl:h-[10%]">
            <div className="flex items-center justify-center h-[80%] space-x-2">
                <div
                    className={`h-[70%] w-[50%] rounded-lg flex items-center justify-center cursor-pointer ${activeTab === 'destinations' ? 'bg-ne-prussianBlue' : ''}`}
                    onClick={() => onTabChange('destinations')}
                >
                    <span className="text-white font-semibold text-lg">Destinations</span>
                </div>
                <div
                    className={`h-[70%] w-[50%] rounded-lg flex items-center justify-center cursor-pointer ${activeTab === 'chat' ? 'bg-ne-prussianBlue' : ''}`}
                    onClick={() => onTabChange('chat')}
                >
                    <span className="text-white font-semibold text-lg">Chat</span>
                </div>
            </div>
        </div>
    )
}