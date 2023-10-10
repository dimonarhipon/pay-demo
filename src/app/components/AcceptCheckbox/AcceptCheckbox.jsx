import styles from './AcceptCheckbox.module.scss';

export const AcceptCheckbox = () => {
	return (
		<p className={styles.сheckbox}>
			<input
				id="accept"
				type="checkbox"
				name="accept-checkbox"
				value="accept"
				className={styles.checkboxInput}
				required
				tabIndex={6}
			/>
			<label htmlFor="accept" className={styles.checkboxName}>
				<span className={styles.checkboxPoint}></span>
					I accept the <a className={styles.checkboxLink} href=""> Terms and Conditions</a>
			</label>
		</p>
	);
};
