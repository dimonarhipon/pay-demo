
export const TabCredit = () => {
	const formatCreditCardNumber = (value) => {
		return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
	};

	const onCreditCardChange = (evt) => {
		const formatted = formatCreditCardNumber(evt.target.value);
		evt.target.value = formatted;
	};

	return (
		<fieldset>
			<input
				onChange={onCreditCardChange}
				required
			/>
			<input type="text" required />
			<input type="text" required />
			<input type="text" required />
			<input type="text" maxLength="3" required />

			<tooltip title="Объяснение о CVV">
				<span>?</span>
			</tooltip>
		</fieldset>
	);
};
