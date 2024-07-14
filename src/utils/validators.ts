function emailValidateHandler(email: string): boolean {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

export { emailValidateHandler };
