import { PaymentOptions } from '../PaymentOptions/PaymentOptions';
import { AcceptCheckbox } from '../AcceptCheckbox/AcceptCheckbox';
import { useValidation } from './utils';
import styles from './PayMethod.module.scss';

export const PayMethod = () => {
	const {errors, showError, clearErrors} = useValidation();

	const validateForm = () => {

		if (errors) {
			showError('field', 'Error message');
		}
		clearErrors();
	};

	return (
		<>
			<h2>Payment method</h2>

			<form className={styles.form}>
				<PaymentOptions />

				<AcceptCheckbox />
				<button type="submit" onClick={validateForm}>
					Place order ($ 624.99)
				</button>
			</form>
		</>
	);
};
