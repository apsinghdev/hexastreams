import { EncoderSettings } from "./EncoderSettings"
import { ChannelSettings } from "./ChannelSettings"

export const PageBody = () => {
    return (
        <div className="flex flex-col xl:flex-row h-full overflow-hidden w-full xl:space-x-3">
            <EncoderSettings></EncoderSettings>
            <ChannelSettings></ChannelSettings>
        </div>
    )
}