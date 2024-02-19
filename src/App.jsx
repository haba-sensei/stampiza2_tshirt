import Canvas from './canvas'
import User from './components/User'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

function App() {
  return ( 
      <main className='transition-all ease-in app'>
        <Home />
        <Canvas />
        <Customizer />
        <User />
      </main>  
  )
}

export default App
