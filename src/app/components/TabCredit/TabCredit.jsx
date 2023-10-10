import styles from './TabCredit.module.scss';
import cn from 'classnames';

export const TabCredit = () => {
	const formatCreditCardNumber = (value) => {
		return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
	};

	const onCreditCardChange = (evt) => {
		const formatted = formatCreditCardNumber(evt.target.value);
		evt.target.value = formatted;
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
						onChange={onCreditCardChange}
						className={cn(styles.cardInput, styles.large)}
						tabIndex={1}
					/>
				</p>


					<p className={cn(styles.cardWrapper)}>
						<label htmlFor="card-mm" className={styles.cardLabel}>
							Valid thru (mm/yy) <sup className={styles.cardRequired}>*</sup>
						</label>

						<div className={styles.cardWrapInput}>
							<input id="card-mm" type="text" className={styles.cardInput} 	tabIndex={2} />

							<label htmlFor="card-yy" className={styles.cardLabel}></label>
							<span className={styles.cardSegment}> / </span>
							<input
								id="card-yy"
								type="text"
								className={styles.cardInput}
								tabIndex={3}
							/>
						</div>
					</p>


				<p className={styles.cardWrapper}>
					<label htmlFor="card-holder" className={styles.cardLabel}>
						Cardholder&#39;s name <sup className={styles.cardRequired}>*</sup>
					</label>
					<input id="card-holder" type="text" className={cn(styles.cardInput, styles.large)} tabIndex={4}  />
				</p>
			</div>

			<div className={styles.cardBox}>
				<p className={styles.cardWrapper}>
					<label htmlFor="card-cvc" className={styles.cardLabel}>
						CVV/CVC <sup className={styles.cardRequired}>*</sup>
					</label>
					<div className={styles.cardBoxInput}>
						<input
							id="card-cvc"
							type="text"
							pattern="/^\d{3}$/"
							className={cn(styles.cardInput, styles.middle)}
							maxLength="3"
							title="enter 3 integers"
							required
							tabIndex={5}
						/>

						<div className={styles.prompt} title="cvv/cvc is located on the back of the bank card">?</div>
					</div>
				</p>
			</div>
		</fieldset>
	);
};
