import { useContext } from "react"
import { CarrinhoContext } from "../componentes/CarrinhoContext"
import ItemCarrinho from "../componentes/ItemCarrinho"
import produtos from "../Produtos"
import '../estilos/Carrinho.css'

function Carrinho() {
  const { carrinho } = useContext(CarrinhoContext)

  if (carrinho.length > 0) {
    return (
      <div className="div-pai">
        {carrinho.map(p => <ItemCarrinho key={p.id} id={p.id} qtd={p.qtd} />)}
        <p>Total:{valorTotal()}</p>
      </div>
    )
  } else {
    return (
      <div className="carrinho-vazio">
        Carrinho vazio
      </div>
    )
  }

  function valorTotal() {
    var total = 0
    for (let i = 0; i < carrinho.length; i++) {
      const produto = produtos.find(p => p.id == carrinho[i].id)
      total += produto.preco * carrinho[i].qtd
    }
    return (total.toFixed(2))
  }
}

export default Carrinho
