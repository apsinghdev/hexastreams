import { Header } from "./Header"
import { PageBody } from "./PageBody"

export const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-shrink-0 p-4">
                <Header></Header>
            </div>
            <div className="flex-grow overflow-hidden px-4 pb-4">
                <PageBody />
            </div>
        </div>
    )
}