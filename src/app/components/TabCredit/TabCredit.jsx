import styles from './TabCredit.module.scss';
import cn from 'classnames';
import { Regular } from '../../const';
import { useIMask } from 'react-imask';

export const TabCredit = () => {
  const refNumber = useIMask({
    mask: '0000 0000 0000 0000',
    radix: ' ',
		autofix: true
  });

	const refMount = useIMask({
    mask: '00',
		autofix: true,
		blocks: {
      '0': {
        mask: /^\d$/,
      },
    },
  });

	const refYear = useIMask({
    mask: '00',
		autofix: true,
		blocks: {
      '0': {
        mask: /^\d$/,
      },
    },
  });

	const nameRef = useIMask({
		mask: Regular.Name,
    autofix: true,
		prepare: (str) => str.toUpperCase()
  });

	const refCvc = useIMask({
    mask: '000',
		autofix: true,
		blocks: {
      '0': {
        mask: /^\d$/,
      },
    },
  });

	const checkMonthHandler = (event) => {
		event.target.setCustomValidity('');
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
						{...refNumber}
						type="text"
						name="cardNumber"
						className={cn(styles.cardInput, styles.large)}
						inputMode="numeric"
						placeholder="0000 0000 0000 0000"
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
							{...refMount}
							name="cardExpiryMonth"
							type="text"
							className={styles.cardInput}
							onChange={checkMonthHandler}
							inputMode="numeric"
							placeholder="00"
							maxLength={2}
							tabIndex={2}
							required
						/>

						<label htmlFor="card-yy" className={styles.cardLabel}></label>
						<span className={styles.cardSegment}> / </span>
						<input
							id="card-yy"
							{...refYear}
							type="text"
							name="cardExpiryYear"
							className={styles.cardInput}
							inputMode="numeric"
							placeholder="00"
							maxLength={2}
							tabIndex={3}
							required
						/>
					</p>
				</div>

				<p className={styles.cardWrapper}>
					<label htmlFor="card-name" className={styles.cardLabel}>
						Cardholder&#39;s name <sup className={styles.cardRequired}>*</sup>
					</label>
					<input
						id="card-name"
						{...nameRef}
						type="text"
						name="cardName"
						className={cn(styles.cardInput, styles.large)}
						placeholder="ABCD"
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
							{...refCvc}
							type="text"
							name="cardCvc"
							className={cn(styles.cardInput, styles.middle)}
							maxLength="3"
							inputMode="numeric"
							title="enter 3 integers"
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
