import { Outlet } from 'react-router-dom'
import Header from './componentes/Header'
import CarrinhoProvider from './componentes/CarrinhoContext'


function App() {

  return (
    <CarrinhoProvider>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </CarrinhoProvider>
  )
}

export default App
