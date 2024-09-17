import { emailValidateHandler } from "../validators";

describe("VALIDATORS TESTS SUITE", () => {
  describe("emailValidateHandler tests suite", () => {
    it("should return true if email is valid", () => {
      const validEmail = "test@example.com";
      const result = emailValidateHandler(validEmail);
      expect(result).toBe(true);
    });

    it("should return false if email is invalid", () => {
      const invalidEmail = "test@example";
      expect(emailValidateHandler(invalidEmail)).toBe(false);
    });
  });
});
