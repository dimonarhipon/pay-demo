import styles from './AcceptCheckbox.module.scss';
import PropTypes from 'prop-types';

export const AcceptCheckbox = ({ formData, setFormData }) => {
	return (
		<p className={styles.сheckbox}>
			<input
				id="accept"
				type="checkbox"
				name="accept-checkbox"
				value="accept"
				className={styles.checkboxInput}
				onChange={() => setFormData({
					...formData,
					accepted: !formData.accepted,
				})}
				checked={formData.accepted}
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

AcceptCheckbox.propTypes = {
  formData: PropTypes.object,
	setFormData: PropTypes.func,
};
