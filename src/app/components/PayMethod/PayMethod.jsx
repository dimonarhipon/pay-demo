import { useState } from 'react';
import { PaymentOptions } from '../PaymentOptions/PaymentOptions';
import { AcceptCheckbox } from '../AcceptCheckbox/AcceptCheckbox';
import { Regular } from '../../const';

import styles from './PayMethod.module.scss';

export const PayMethod = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiryMonth: '',
		cardExpiryYear: '',
		cardName: '',
    cardCvc: '',
    accepted: false
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const validNumber = Regular.Number.test(formData.cardNumber);
    const validExpiryMonth = Regular.ExpiryMonth.test(formData.cardExpiryMonth);
		const validExpiryYear = Regular.ExpiryYear.test(formData.cardExpiryYear);
		const validName = Regular.Name.test(formData.cardName);
    const validCVC = Regular.Cvv.test(formData.cardCvc);

    if (validNumber && validExpiryMonth && validExpiryYear && validName && validCVC && formData.accepted) {
      alert('Invalid form data');
    } else {
			alert('Error');
		}
  };


	const isValidForm =
		formData.cardNumber.length &&
		formData.cardExpiryMonth.length &&
		formData.cardExpiryYear.length &&
		formData.cardName.length &&
		formData.cardCvc.length &&
		formData.accepted;

	return (
		<section>
			<h2 className={styles.title}>Payment method</h2>

			<form className={styles.form} autoComplete="on" onSubmit={submitHandler}>
				<PaymentOptions formData={formData} setFormData={setFormData} />

				<AcceptCheckbox formData={formData} setFormData={setFormData} />

				<button type="submit" className={styles.submit} tabIndex={7} disabled={!isValidForm}>
					Place order ($ 624.99)
				</button>
			</form>
		</section>
	);
};
