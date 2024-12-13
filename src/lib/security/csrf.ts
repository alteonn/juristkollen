// CSRF Protection
export const getCsrfToken = () => {
  return crypto.randomUUID();
};

export const validateCsrfToken = (token: string, storedToken: string) => {
  return token === storedToken;
};