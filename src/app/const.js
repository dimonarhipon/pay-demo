export const TabNames = {
	Credit: 'Credit card',
  Gift: 'Gift card',
  PayPal: 'PayPal',
};

export const Regular = {
	Number: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
	Cvv: /^\d{3}$/,
	Name: /^[A-Z\s]*$/,
	ExpiryMonth: /^(0[1-9]|1[0-2])$/,
	ExpiryYear: /^\d{2}$/,
};
