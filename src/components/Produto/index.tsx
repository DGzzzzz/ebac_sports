import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { adicionar, removerCarrinho } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'
import { adicionarFav, remover } from '../../store/reducers/favoritos'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const estaNosFavoritos = favoritos.find((item) => item.id === produto.id)

  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)
  const estaNoCarrinho = carrinho.find((item) => item.id === produto.id)

  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() =>
          estaNosFavoritos
            ? dispatch(remover(produto))
            : dispatch(adicionarFav(produto))
        }
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() =>
          estaNoCarrinho
            ? dispatch(removerCarrinho(produto))
            : dispatch(adicionar(produto))
        }
        type="button"
      >
        {estaNoCarrinho ? '- Remover do carrinho' : '+ Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
