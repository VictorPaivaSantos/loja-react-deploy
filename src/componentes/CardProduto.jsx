import { Link } from "react-router-dom"
import '../estilos/CardProduto.css'

const CardProduto = ({produto}) => {
  return (
    <div className="card-produto">
        <Link to={`/produto/${produto.id}`}>
            <img src={produto.imagem} alt={produto.nome} />
            <p className="produto-nome">{produto.nome}</p>
            <p className="produto-preco"><b>{"R$"+produto.preco}</b></p>
        </Link>
    </div>
    
  )
}

export default CardProduto