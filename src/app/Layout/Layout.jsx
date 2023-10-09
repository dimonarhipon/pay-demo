import { Header } from '../components/Header/Header';
import { Cart } from '../components/Cart/Cart';
import styles from './Layout.module.scss';

export const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header/>
			<Cart />
		</div>
	);
};
