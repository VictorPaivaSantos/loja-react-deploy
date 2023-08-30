import { createContext, useState } from "react"

export const CarrinhoContext = createContext()

export default function CarrinhoProvider({ children }) {

    const [carrinho, setCarrinho] = useState([])

    function addProdutoCarrinho(id) {
        const carrinhoAux = [...carrinho]
        const item = carrinhoAux.find((p) => p.id == id)

        if (!item) {
            carrinhoAux.push({ id: id, qtd: 1 })
        } else {
            item.qtd += 1
        }
        setCarrinho(carrinhoAux)
    }

    function removeProdutoCarrinho(id) {
        const carrinhoAux = [...carrinho]
        const item = carrinhoAux.find((p) => p.id == id)

        if (item.qtd > 1) {
            item.qtd -= 1
            setCarrinho(carrinhoAux)
        } else {
            const carrinhoFiltrado = carrinhoAux.filter(p => p.id != id)
            setCarrinho(carrinhoFiltrado)
        }
    }

    function limparCarrinho() {
        setCarrinho([])
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, addProdutoCarrinho, removeProdutoCarrinho, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}


