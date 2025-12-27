import ViteLogo from "../../public/vite.svg"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// @ts-ignore
import { setUser } from "../app/user.js"
import { Button } from "./ui/button.js"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    type User = {
        id: number,
        name: string,
        email: string,
        avatar: string,
    }
    const user: User | null = useSelector((state: any) => state.user)

    function handleLogin() {
        const user = {
            id: 1,
            name: 'Renan',
            email: 'renan@email.com',
            avatar: 'https://github.com/renandp03.png',
        }
        dispatch(setUser(user))
    }

    function handleLogout() {
        dispatch(setUser({
            id: null,
            name: null,
            email: null,
            avatar: null,
        }))
    }

    return (
        <header className="flex items-center justify-between px-10 py-4">
            <div className="logo flex h-10 items-center ">
                <img src={ViteLogo} alt="Vite Logo" className="w-8 h-8"/>
                <h1 className="text-2xl font-bold">Stock Pocket</h1>
            </div>
            {
                user?.id && (
                    <div className="flex items-center gap-1">
                        <Avatar>
                            <AvatarImage src={user?.avatar} />
                            <AvatarFallback>{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="leading-4 font-medium">{user?.name}</span>
                            <span className="leading-4 text-sm font-medium">{user?.email}</span>
                        </div>
                    </div>
                )
            }
            {
                !user?.id && (
                    <Button className="text-md font-medium hover:pointer" variant="link" onClick={()=>navigate('/login')}>Login</Button>
                )
            }
        </header>
    )
}

export default Header