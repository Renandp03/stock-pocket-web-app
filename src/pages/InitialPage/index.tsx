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
// @ts-ignore
import { setTheme } from "@/reducer/theme.js"
import { AppSidebar } from "@/components/app-sidebar"
import ProductCard from "./components/productCard"

function InitialPage() {
  const dispatch = useDispatch()
  const isDark = useSelector((state: any) => state.theme.isDark)
  function handleChangeTheme(isDark : Boolean) {
      dispatch(setTheme(isDark))
      localStorage.setItem('stock-pocket-theme', isDark ? 'dark' : 'light')
  }

  const productsList = [
    {
      id: 1,
      name: 'Produto 1',
      price: 100.00,
      image: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg',
      description: 'Descrição do produto caso o comprador tenha interesse em saber mais sobre o produto.',
      limit: 10,
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 200.00,
      image: 'https://images.pexels.com/photos/17968140/pexels-photo-17968140.jpeg',
      description: 'Descrição do produto caso o comprador tenha interesse em saber mais sobre o produto.',  
      limit: 10,
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 300.00,
      image: 'https://images.pexels.com/photos/3860030/pexels-photo-3860030.jpeg',
      description: 'Descrição do produto caso o comprador tenha interesse em saber mais sobre o produto.',
      limit: 10,
    },
  ]
  return (
    <main className="w-screen h-screen">
      <SidebarProvider>
      <AppSidebar />
      <div className="w-full p-4 ">
        <header className="bg-background text-foreground p-2 flex items-center w-full rounded-md gap-2">
          <SidebarTrigger />
          <div className="separetor-line w-px h-4 bg-foreground"></div>
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
        <section className="products-container grid grid-cols-4 gap-4 p-2">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </SidebarProvider>
    </main>
  )
}

export default InitialPage