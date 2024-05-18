import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    remover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.itens = state.itens.filter((item) => item.id !== produto.id)
    }
  }
})

export const { adicionarFav, remover } = favoritoSlice.actions
export default favoritoSlice.reducer
