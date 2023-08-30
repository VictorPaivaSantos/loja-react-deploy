import produtos from "../Produtos"
import { CarrinhoContext } from "./CarrinhoContext"
import { useContext } from "react"
import '../estilos/ItemCarrinho.css'

const ItemCarrinho = ({ id, qtd }) => {

    const { removeProdutoCarrinho } = useContext(CarrinhoContext)

    const produto = produtos.find(p => p.id == id)

    return (
        <div className="item-carrinho">
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p><b>{"R$" + produto.preco}</b></p>
            <p>Quantidade: {qtd}</p>
            <p>{"R$" + (produto.preco * qtd).toFixed(2)}</p>
            <button onClick={() => removeProdutoCarrinho(id)}>remover</button>
        </div>
    )
}

export default ItemCarrinho