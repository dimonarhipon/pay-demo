import { useState } from 'react';
import { PaymentOptions } from '../PaymentOptions/PaymentOptions';
import { AcceptCheckbox } from '../AcceptCheckbox/AcceptCheckbox';
import { Regular } from '../../const';

import styles from './PayMethod.module.scss';

export const PayMethod = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiryBegin: '',
		cardExpiryEnd: '',
		cardName: '',
    cardCvc: '',
    accepted: false
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const validNumber = Regular.Number.test(formData.cardNumber);
    const validExpiryBegin = Regular.Expiry.test(formData.cardExpiryBegin);
		const validExpiryEnd = Regular.Expiry.test(formData.cardExpiryEnd);
		const validName = Regular.Name.test(formData.cardName);
    const validCVC = Regular.Cvv.test(formData.cardCvc);

    if (validNumber && validExpiryBegin && validExpiryEnd && validName && validCVC && formData.accepted) {
      alert('Invalid form data');
    } else {
			alert('Error');
		}
  };

	const isValidForm =
		formData.cardNumber.length &&
		formData.cardExpiryBegin.length &&
		formData.cardExpiryEnd.length &&
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
