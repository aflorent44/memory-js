/**
 * Check Username
 * @param {string} username
 * @returns
 */
const usernameValidator = (username) => {
  const usernameRegex =
    /^(?!.*[_-]{2})[A-Za-z0-9][A-Za-z0-9_-]{3,15}[A-Za-z0-9]$/;
  return usernameRegex.test(username);
};

/**
 * Check Email
 * @param {string} email
 * @returns
 */
const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
  return emailRegex.test(email);
};

export { usernameValidator, emailValidator };
