
/**
 * Check Email
 * @param {string} email
 * @returns
 */
const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
  return emailRegex.test(email);
};

/**
 * Check Password Format
 * @param {string} password
 * @returns
 */
const passwordValidator = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^-_&*])(?=.{6,})/;
  return passwordRegex.test(password);
};

export { emailValidator, passwordValidator };
