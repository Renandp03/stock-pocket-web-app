import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@radix-ui/react-label"
import { Settings } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "@/app/theme.js"
import { AppSidebar } from "@/components/app-sidebar"

function InitialPage() {
  const dispatch = useDispatch()
  const isDark = useSelector((state: any) => state.theme.isDark)
  function handleChangeTheme(isDark : Boolean) {
      dispatch(setTheme({ isDark }))
      localStorage.setItem('stock-pocket-theme', isDark ? 'dark' : 'light')
  }
  return (
    <main className="w-screen h-screen">
      <SidebarProvider>
      <AppSidebar />
      <div className="w-full p-4 ">
        <header className="bg-background text-foreground p-2 flex items-center w-full rounded-md gap-2">
          <SidebarTrigger />
          <div className="separetor-line w-[1px] h-4 bg-foreground"></div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Frente de Caixa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto">
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
      </div>
    </SidebarProvider>
    </main>
  )
}

export default InitialPage