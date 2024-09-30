import { useState } from "react"
import { ChannelSettingsHeader } from "./ChannelSettingsHeader"
import { Destinations } from "./Destinations"
import { Chat } from "./Chat"

export const ChannelSettings = () => {
    const [activeTab, setActiveTab] = useState('destinations')

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="w-full xl:w-[40rem] xl:h-full h-3/5 md:h-[32rem] mt-7 xl:m-0 md:mt-10 bg-[#0A1E43] rounded-xl p-3">
            <ChannelSettingsHeader activeTab={activeTab} onTabChange={handleTabChange} />
            {activeTab === 'destinations' ? <Destinations /> : <Chat />}
        </div>
    )
}