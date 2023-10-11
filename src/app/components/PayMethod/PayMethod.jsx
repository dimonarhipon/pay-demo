import { PaymentOptions } from '../PaymentOptions/PaymentOptions';
import { AcceptCheckbox } from '../AcceptCheckbox/AcceptCheckbox';
import { Regular } from '../../const';
import styles from './PayMethod.module.scss';

export const PayMethod = () => {
  const submitHandler = (event) => {
    event.preventDefault();
		const formData = new FormData(event.target);
		const body = Object.fromEntries(formData);

    const validNumber = Regular.Number.test(body.cardNumber);
    const validExpiryMonth = Regular.ExpiryMonth.test(body.cardExpiryMonth);
		const validExpiryYear = Regular.ExpiryYear.test(body.cardExpiryYear);
		const validName = Regular.Name.test(body.cardName);
    const validCVC = Regular.Cvv.test(body.cardCvc);

		const inputCardExpiryMonth = document.querySelector('#card-mm');

    if (validNumber && validExpiryMonth && validExpiryYear && validName && validCVC && body.accepted) {
      alert('Invalid form data');
			event.target.reset();
    } else if (!validExpiryMonth) {
			return inputCardExpiryMonth.setCustomValidity('month must be from 01 to 12');
		} else {
			alert('Error form data');
		}
  };

	return (
		<section>
			<h2 className={styles.title}>Payment method</h2>

			<form className={styles.form} autoComplete="on" onSubmit={submitHandler}>
				<PaymentOptions />

				<AcceptCheckbox />

				<button type="submit" className={styles.submit} tabIndex={7}>
					Place order ($ 624.99)
				</button>
			</form>
		</section>
	);
};
