import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'
import favoritos from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritos,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
