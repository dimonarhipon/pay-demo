import styles from './Header.module.scss';
import { Logo } from './image/Logo';

export const Header = () => {
	return (
		<header className={styles.header} >
			<a className={styles.logo} href="https://www.cs-cart.ru/" target="_blank" rel="noreferrer">
				<Logo />
			</a>
		</header>
	);
};
