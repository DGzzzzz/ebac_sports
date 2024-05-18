import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    removerCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.itens = state.itens.filter((item) => item.id !== produto.id)
    }
  }
})

export const { adicionar, removerCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
