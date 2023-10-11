import { useState } from 'react';
import styles from './AcceptCheckbox.module.scss';
import { Modal } from '../Modal/Modal';

export const AcceptCheckbox = () => {
	const [openModal, setModalToggle] = useState(false);

	const openModalHandler = (event) => {
		event.stopPropagation();
		setModalToggle(true);
	};
	return (
		<>
			<p className={styles.сheckbox}>
				<input
					id="accept"
					type="checkbox"
					name="accepted"
					className={styles.checkboxInput}
					required
					tabIndex={6}
				/>
				<label htmlFor="accept" className={styles.checkboxName}>
					<span className={styles.checkboxPoint}></span>
						I accept the <button type="button" className={styles.openModal} onClick={openModalHandler}> Terms and Conditions</button>
				</label>
			</p>

			<Modal open={openModal} title="Terms and Conditions" setModalToggle={setModalToggle} />
		</>
	);
};
