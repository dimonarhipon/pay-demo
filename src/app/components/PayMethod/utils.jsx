
import { useState } from 'react';

const showError = (fieldId, msg) => {
	// Получаем элемент формы по ID
	const field = document.getElementById(fieldId);

	// Добавляем класс ошибки
	field.classList.add('error');

	// Элемент вывода сообщения
	const errorMsg = document.createElement('div');
	errorMsg.classList.add('error-msg');
	errorMsg.innerText = msg;

	// Вставляем сообщение после поля
	field.parentNode.insertBefore(errorMsg, field.nextSibling);
};

const validateForm = () => {
	let isValid = true;

	// Проверка номера карты
	const cardNumber = document.getElementById('cardNumber').value;
	const validCard = /^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber);

	if(!validCard) {
		showError('cardNumber', 'Неверный формат номера карты');
		isValid = false;
	}

	// Проверка обязательных полей
	const requiredFields = [
		'cardNumber',
		'cardMonth',
		'cardYear',
		'cardHolder'
	];

	requiredFields.forEach(field => {
		const value = document.getElementById(field).value;

		if (!value) {
			showError(field, 'Обязательное поле');
			isValid = false;
		}
	});

	// Проверка CVV
	const cvv = document.getElementById('cvv').value;
	const validCvv = /^\d{3}$/.test(cvv);

	if(!validCvv) {
		showError('cvv', 'Неверный формат CVV');
		isValid = false;
	}

	return isValid;
};

export const useValidation = () => {
  const [errors, setErrors] = useState({});

  const showError = (field, message) => {
    setErrors(prev => ({ ...prev, [field]: message }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors,
    showError,
    clearErrors
  };
};
