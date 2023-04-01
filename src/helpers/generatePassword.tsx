export function generatePassword() {
  const length = Math.floor(Math.random() * 7) + 8; // Генеруємо довжину пароля в діапазоні від 8 до 14 символів
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Встановлюємо набір символів, що можуть бути в паролі
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    const index = Math.floor(Math.random() * n); // Генеруємо індекс символу
    password += charset.charAt(index); // Додаємо символ до пароля
  }
  // Переконуємося, що пароль містить хоча б одну цифру
  if (!/\d/.test(password)) {
    const randomIndex = Math.floor(Math.random() * length); // Генеруємо випадковий індекс
    const randomDigit = Math.floor(Math.random() * 10); // Генеруємо випадкову цифру
    password = password.slice(0, randomIndex) + randomDigit + password.slice(randomIndex + 1); // Замінюємо символ на випадкову цифру
  }
  return password;
}