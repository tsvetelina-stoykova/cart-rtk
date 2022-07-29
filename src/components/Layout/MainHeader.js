import classes from './mainHeader.module.css'
import CartButton from '../Cart/CartButton'

const MainHeader = () => {
	return(
		<header className={classes.header}>
			<h1>RTK</h1>
			<nav>
			<ul>
				<li>
					<CartButton />		
				</li>
			</ul>
			</nav>
		</header>
	)
}

export default MainHeader