import { useSearchParams } from "react-router-dom"
import CardProduto from "../componentes/CardProduto"
import produtos from "../Produtos"
import '../estilos/Listagem.css'

const Pesquisa = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="produtos-container">
        {produtos.filter(produto => produto.nome.includes(query)).map((produto) => <CardProduto key={produto.id} produto={produto} />)}
      </div>
  </div>
  )
}
  
  export default Pesquisa