import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function InitialPage() {
  return (
    <div>
      <h1>Initial Page</h1>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
    </div>
  )
}

export default InitialPage