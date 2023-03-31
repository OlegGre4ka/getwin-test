export function generatePassword() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const allowedChars = alphabet + uppercase + numbers;
  
    const minLength = 8;
    const maxLength = 14;
  
    let passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = "";
  
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  
    for (let i = 2; i < passwordLength; i++) {
      password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
  
    return password;
  }