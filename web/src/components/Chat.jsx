import { ChatHeader } from "./ChatHeader"
import { ChatBody } from "./ChatBody"
import { ChatFooter } from "./ChatFooter"

export const Chat = () => {
    return (
        <div className="w-full h-[80%] xl:h-[90%]">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}