import styles from './TabCredit.module.scss';
import cn from 'classnames';
import { Regular } from '../../const';
import PropTypes from 'prop-types';

export const TabCredit = ({ formData, setFormData }) => {
	const { cardNumber, cardExpiryBegin, cardExpiryEnd, cardName, cardCvc } = formData;
	const formatCardNumberHandler = (value) => {
		return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
	};

	const cardNumberHandler = (event) => {
		const formatted = formatCardNumberHandler(event.target.value);
		event.target.value = formatted;
		setFormData({
			...formData,
			cardNumber: event.target.value,
		});
	};

	const cardExpiryBeginHandler = (event) => {
		setFormData({
			...formData,
			cardExpiryBegin: event.target.value,
		});
	};

	const cardExpiryEndHandler = (event) => {
		setFormData({
			...formData,
			cardExpiryEnd: event.target.value,
		});
	};

	const cardNameHandler = (event) => {
		setFormData({
			...formData,
			cardName: event.target.value,
		});
	};

	const cardCvcHandler = (event) => {
		setFormData({
			...formData,
			cardCvc: event.target.value,
		});
	};

	return (
		<fieldset className={cn(styles.fieldset, styles.card)}>
			<div className={styles.cardContainer}>
				<p className={styles.cardWrapper}>
					<label htmlFor="card-number" className={styles.cardLabel}>
						Card number <sup className={styles.cardRequired}>*</sup>
					</label>
					<input
						id="card-number"
						type="text"
						name="card-number"
						className={cn(styles.cardInput, styles.large)}
						inputMode="numeric"
						pattern={Regular.Number}
						placeholder="0000 0000 0000 0000"
						onChange={cardNumberHandler}
						value={cardNumber}
						maxLength={19}
						tabIndex={1}
						required
					/>
				</p>

				<div className={cn(styles.cardWrapper)}>
					<label htmlFor="card-mm" className={styles.cardLabel}>
						Valid thru (mm/yy) <sup className={styles.cardRequired}>*</sup>
					</label>

					<p className={styles.cardWrapInput}>
						<input
							id="card-mm"
							name="card-mm"
							type="text"
							className={styles.cardInput}
							inputMode="numeric"
							pattern={Regular.Expiry}
							placeholder="00"
							onChange={cardExpiryBeginHandler}
							value={cardExpiryBegin}
							maxLength={2}
							tabIndex={2}
							required
						/>

						<label htmlFor="card-yy" className={styles.cardLabel}></label>
						<span className={styles.cardSegment}> / </span>
						<input
							id="card-yy"
							type="text"
							className={styles.cardInput}
							inputMode="numeric"
							pattern={Regular.Expiry}
							placeholder="00"
							onChange={cardExpiryEndHandler}
							value={cardExpiryEnd}
							maxLength={2}
							tabIndex={3}
							required
						/>
					</p>
				</div>

				<p className={styles.cardWrapper}>
					<label htmlFor="card-holder" className={styles.cardLabel}>
						Cardholder&#39;s name <sup className={styles.cardRequired}>*</sup>
					</label>
					<input
						id="card-holder"
						type="text"
						className={cn(styles.cardInput, styles.large)}
						pattern={Regular.Name}
						onChange={cardNameHandler}
						value={cardName}
						minLength={1}
						tabIndex={4}
						required
					/>
				</p>
			</div>

			<div className={styles.cardBox}>
				<div className={styles.cardWrapper}>
					<label htmlFor="card-cvc" className={styles.cardLabel}>
						CVV/CVC <sup className={styles.cardRequired}>*</sup>
					</label>
					<p className={styles.cardBoxInput}>
						<input
							id="card-cvc"
							type="text"
							className={cn(styles.cardInput, styles.middle)}
							maxLength="3"
							inputMode="numeric"
							pattern={Regular.Cvv}
							title="enter 3 integers"
							onChange={cardCvcHandler}
							value={cardCvc}
							placeholder="000"
							required
							tabIndex={5}
						/>

						<span className={styles.prompt} title="cvv/cvc is located on the back of the bank card">?</span>
					</p>
				</div>
			</div>
		</fieldset>
	);
};

TabCredit.propTypes = {
  formData: PropTypes.object,
	setFormData: PropTypes.func,
};
