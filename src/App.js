import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'


function App() {
	const showCart = useSelector(state => state.ui.isCartVisible)
	const cart = useSelector((state) => state.cart)

	useEffect(() => {
		fetch('https://react-http-2354a-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
			method: 'PUT',
			body: JSON.stringify(cart)
		})
	}, [cart])

	return (
		<div className="App">
			<Layout>
				{showCart && <Cart/>}
				<Products />
			</Layout>
		</div>
	  );
}

export default App;
