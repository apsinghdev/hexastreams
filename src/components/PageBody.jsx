import { EncoderSettings } from "./EncoderSettings"
import { ChannelSettings } from "./ChannelSettings"

export const PageBody = () => {
    return (
        <div className="flex flex-col lg:flex-row h-full overflow-hidden w-full">
            <EncoderSettings></EncoderSettings>
            <ChannelSettings></ChannelSettings>
        </div>
    )
}