import { Prices } from '../Prices/Prices';
import { PayMethod } from '../PayMethod/PayMethod';
import styles from './Cart.module.scss';

export const Cart = () => {
	return (
		<main className={styles.cart}>
			<h1>Checkout</h1>
			<Prices />
			<PayMethod />
		</main>
	);
};
