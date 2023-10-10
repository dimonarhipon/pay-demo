export const TabNames = {
	Credit: 'Credit card',
  Gift: 'Gift card',
  PayPal: 'PayPal',
};

export const Regular = {
	// Number: /^\d{4}\d{4}\d{4}\d{4}$/,
	Cvv: /^\d{3}$/,
	Name: /^[a-zA-Z\s]*$/,
	Expiry: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
};
