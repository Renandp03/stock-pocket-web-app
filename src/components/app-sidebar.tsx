import { useSelector } from "react-redux"

//components
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarGroupContent,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup
} from "@/components/ui/sidebar"

import { Home, Inbox } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { LogOut } from "lucide-react"
import { Button } from "./ui/button"

const itens = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
]

export function AppSidebar() {

  const user = useSelector((state: any) => state.user)
  const group = useSelector((state: any) => state.group)

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 flex items-center group-data-[collapsible=offcanvas]:px-4">
        <div className="flex items-center gap-2 w-full">
          <Avatar className="rounded-sm">
            <AvatarImage src={group?.logo} />
            <AvatarFallback>{group?.name}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col overflow-hidden">
            <span className="font-medium leading-none truncate">
              {group?.name}
            </span>
            <span className="text-sm text-muted-foreground truncate">
              Filial: {group?.branch?.name}
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itens.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <a href={item.url}>
                      <item.icon className="size-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        
              <div className="flex items-center gap-2">
                <Avatar className="rounded-sm">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-medium leading-none truncate">
                    {user?.name}
                  </span>
                  <span className="text-sm text-muted-foreground truncate">
                    {user?.email}
                  </span>
                </div>
              </div>
           
      </SidebarFooter>
    </Sidebar>
  )
}

