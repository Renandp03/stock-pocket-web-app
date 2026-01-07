import { useState } from "react"


import { Plus, Minus } from "lucide-react"

type Product = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  limit: number,
}

type QuantityChange = -1 | 1

function ProductCard({ product }: { product: Product }) {

    const [quantity, setQuantity] = useState(0)
    function handleQuantityChange(change: QuantityChange) {
        if (quantity + change < 0 || product.limit && quantity + change > product.limit) return
        setQuantity(quantity + change)
    }
  return (
    <div className="bg-foreground text-background p-4 rounded-md w-full box-border">
        <div className="product-image-content relative">
        <img src={product.image} alt={product.name} className="w-full h-full max-h-40 bg-[#D9D9D9] rounded-md object-cover"/>
            <span className="absolute bottom-2 right-2 text-lg font-bold text-[#D9D9D9]">R$ {product.price.toFixed(2)}</span>
        </div>
        
        <footer className="flex flex-col py-1">
            <span className="text-lg font-bold">{product.name}</span>
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{product.price.toFixed(2)}</span>
                  

            </div>
            <span className="text-sm font-medium">{product.description}</span>
            <div className="flex justify-end">
                <div className="flex items-center gap-2">
                    <button 
                    className="rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none bg-red-400 cursor-pointer" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 0}>
                        <Minus />
                    </button>
                    <span className="text-sm font-medium p-2">{quantity}</span>
                    <button 
                    className="rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none bg-green-400 cursor-pointer" 
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.limit}>
                        <Plus />
                    </button>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default ProductCard