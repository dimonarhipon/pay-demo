import styles from './TabCredit.module.scss';
import cn from 'classnames';
import { Regular } from '../../const';
import PropTypes from 'prop-types';
import { useIMask } from 'react-imask';

export const TabCredit = ({ formData, setFormData }) => {
	const { cardNumber, cardExpiryMonth, cardExpiryYear, cardName, cardCvc } = formData;

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

	const cardNumberHandler = (event) => {
		setFormData({
			...formData,
			cardNumber: event.target.value,
		});
	};

	const cardExpiryBeginHandler = (event) => {
		setFormData({
			...formData,
			cardExpiryMonth: event.target.value,
		});
	};

	const cardExpiryEndHandler = (event) => {
		setFormData({
			...formData,
			cardExpiryYear: event.target.value,
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
						{...refNumber}
						type="text"
						name="card-number"
						className={cn(styles.cardInput, styles.large)}
						inputMode="numeric"
						placeholder="0000 0000 0000 0000"
						onChange={cardNumberHandler}
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
							name="card-mm"
							type="text"
							className={styles.cardInput}
							inputMode="numeric"
							placeholder="00"
							onChange={cardExpiryBeginHandler}
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
							className={styles.cardInput}
							inputMode="numeric"
							placeholder="00"
							onChange={cardExpiryEndHandler}
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
						{...nameRef}
						type="text"
						className={cn(styles.cardInput, styles.large)}
						placeholder="ABCD"
						onChange={cardNameHandler}
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
							{...refCvc}
							type="text"
							className={cn(styles.cardInput, styles.middle)}
							maxLength="3"
							inputMode="numeric"
							title="enter 3 integers"
							onChange={cardCvcHandler}
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
