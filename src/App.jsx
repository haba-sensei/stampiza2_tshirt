import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Canvas from './canvas';

function App() {
	return (
		<main className='transition-all ease-in app' style={{ height: '90vh', overflow: 'hidden' }}> 
			<Home />
			<Canvas />
			<Customizer />
		</main>
	);
}

export default App;