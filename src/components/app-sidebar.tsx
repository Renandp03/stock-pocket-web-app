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
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 flex items-center">
        <div className="flex items-center gap-2 w-full">
          <Avatar className="rounded-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>EMP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col overflow-hidden">
            <span className="font-medium leading-none truncate">
              Nome da empresa
            </span>
            <span className="text-sm text-muted-foreground truncate">
              Filial: Campo Grande
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
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Logout"
            >
              <div className="flex items-center gap-2">
                <Avatar className="rounded-sm">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>EMP</AvatarFallback>
                </Avatar>
                <Button variant="link">
                  <LogOut className="size-4" />
                  Logout
                </Button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

