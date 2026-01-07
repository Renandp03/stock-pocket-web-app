// products.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/**
 * Tipos auxiliares
 */
export interface ProductColumn {
  accessorKey: string
  header: string
}

export interface ProductsState {
  columns: ProductColumn[]
  filters: string[]
}

/**
 * Estado inicial tipado
 */
const initialState: ProductsState = {
  columns: [
    { accessorKey: 'name', header: 'Nome' },
    { accessorKey: 'price', header: 'Preço' },
    { accessorKey: 'description', header: 'Descrição' },
    { accessorKey: 'limit', header: 'Limite' }
  ],
  filters: []
}

/**
 * Payload do reducer
 */
interface SetProductsPayload {
  columns: ProductColumn[]
  filters: string[]
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<SetProductsPayload>) {
      state.columns = action.payload.columns
      state.filters = action.payload.filters
    }
  }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
