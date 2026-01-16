import { useState } from "react"


import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

type Product = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  limit: number,
}

type QuantityChange = -1 | 1

function ProductCard({ product, onChangeCount, productCount }: { product: Product, onChangeCount: (id: number, count: number) => void, productCount: number }) {

    const [quantity, setQuantity] = useState(0)
    function handleQuantityChange(change: QuantityChange) {
        if (quantity + change < 0 || product.limit && quantity + change > product.limit) return
        setQuantity(quantity + change)
        onChangeCount(product.id, quantity + change)
    }
  return (
    <div className="">
        <div className="product-image-content relative ">
            <img src={product.image} alt={product.name} className="w-full h-40 max-h-40 object-cover rounded-tl-md rounded-tr-md"/>
            <span className="absolute bottom-2 right-2 text-lg font-bold text-[#D9D9D9]">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        
        <footer className="flex flex-col p-4 bg-foreground text-background rounded-bl-md rounded-br-md w-full box-border overflow-hidden">
            <span className="text-lg font-bold">{product.name}</span>
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <span className="text-sm font-medium">{product.description}</span>
            {productCount === 0 && 
                <Button className="w-full mt-2 cursor-pointer" onClick={() => onChangeCount(product.id, 1)}>Adicionar ao carrinho</Button>
            }
            {productCount > 0 && 
                <div className="flex justify-center mt-2">
                <div className="flex items-center gap-2">
                    <button 
                    className="rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none bg-red-400 cursor-pointer" 
                    onClick={() => onChangeCount(product.id, -1)}
                    disabled={productCount <= 0}>
                        <Minus />
                    </button>
                    <span className="text-sm font-medium p-2">{productCount}</span>
                    <button 
                    className="rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none bg-green-400 cursor-pointer" 
                    onClick={() => onChangeCount(product.id, 1)}
                    disabled={productCount >= product.limit}>
                        <Plus />
                    </button>
                </div>
            </div>
            }
        </footer>
    </div>
  )
}

export default ProductCard