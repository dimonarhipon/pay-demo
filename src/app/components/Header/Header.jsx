import styles from './Header.module.scss';
import { Logo } from './image/Logo';

export const Header = () => {
	return (
		<header className={styles.header} >
			<div className={styles.logo}>
				<Logo />
			</div>
		</header>
	);
};
