import { TopNavbar } from "./TopNavbar"
import { UserProfile } from "./UserProfile"

export const Header = () => {
    return (
        <div className="flex w-full items-center justify-between">
            <TopNavbar></TopNavbar>
            <UserProfile></UserProfile>
        </div>
    )
}