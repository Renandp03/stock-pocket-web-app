import ViteLogo from "../../public/vite.svg"
import { useNavigate, useLocation } from "react-router-dom"
import { setUser, clearUser, type UserState } from "../reducer/user.ts"
import { setTheme } from "../reducer/theme.ts"
import { setGroup, type GroupState } from "../reducer/group.ts"
import { useAppDispatch, useAppSelector } from "@/reducer/hooks.ts"
import { Button } from "./ui/button.js"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@radix-ui/react-label"

import { Settings } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

const pagesToNotShowHeader = ['/login', '/initial-page']

function Header() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const shouldShowHeader = !pagesToNotShowHeader.includes(location.pathname)
    const isDark = useAppSelector((state: any) => state.theme.isDark)
    const user: UserState | null = useAppSelector((state: any) => state.user)

    function handleLogin() {
        const user : UserState = {
            id: '1',
            name: 'Renan',
            email: 'renan@email.com',
            avatar: 'https://github.com/renandp03.png',
            token: '123456',
        }
        const group : GroupState = {
            id: '1',
            name: 'Empresa X',
            logo:'https://github.com/danielbayley.png',
            branch: {
                id: '1',
                name: 'Campo Grande',
            }
        }
        dispatch(setUser(user))
        dispatch(setGroup(group))
        localStorage.setItem('stock-pocket-user', JSON.stringify(user))
        localStorage.setItem('stock-pocket-group', JSON.stringify(group))

        navigate('/initial-page')
    }

    function handleLogout() {
        dispatch(clearUser())
    }

    function handleChangeTheme(isDark : boolean) {  
        dispatch(setTheme(isDark))
        localStorage.setItem('stock-pocket-theme', isDark ? 'dark' : 'light')
        console.log(isDark)
    }

    return (
        <header className={`flex items-center justify-between px-10 py-4 ${shouldShowHeader ? 'block' : 'hidden'}`}>
            <div className="logo flex h-10 items-center ">
                <img src={ViteLogo} alt="Vite Logo" className="w-8 h-8"/>
                <h1 className="text-2xl font-bold">Stock Pocket</h1>
            </div>
            <div className="flex gap-1 items-center">
            {
                user?.id && (
                    <div className="flex items-center gap-1" onClick={handleLogout}>
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
                    <Button className="text-md font-medium hover:pointer" variant="link" onClick={handleLogin}>Login</Button>
                )
            }
                <Sheet>
                    <SheetTrigger className="text-md font-medium hover:pointer"><Settings/></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Configurações da plataforma</SheetTitle>
                        <SheetDescription>
                            <div className="flex items-center space-x-2">
                                <Switch id="dark-mode" onCheckedChange={handleChangeTheme} checked={isDark} />
                                <Label htmlFor="dark-mode">dark Mode</Label>
                            </div>
                        </SheetDescription>
                        </SheetHeader>
                        
                        
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header