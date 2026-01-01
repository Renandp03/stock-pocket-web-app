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

const itens = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itens.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

