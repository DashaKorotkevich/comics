export const unformatPhoneNumber = (value: string): string => {
  return value.replace(/\D/g, ''); //заменяет не цифры на ничто (удаляет)
};

export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  
  if (digits.length < 1) return '';

  let formatted = '+7';

  if (digits.length > 1) {
    
    const code = digits.substring(1, 4); // с [1; 4) пример: 7953 -> 953
    formatted += ` (${code}`; // +7(953
  }

  if (digits.length > 4) {
    
    const firstPart = digits.substring(4, 7);
    formatted += `) ${firstPart}`;
  }

  if (digits.length > 7) {
    
    const secondPart = digits.substring(7, 9);
    formatted += `-${secondPart}`;
  }

  if (digits.length > 9) {
    
    const thirdPart = digits.substring(9, 11);
    formatted += `-${thirdPart}`;
  }

  return formatted;
};