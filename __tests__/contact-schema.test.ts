import { contactSchema } from "@/lib/contact";

describe("contactSchema", () => {
  it("rejects short messages", () => {
    const result = contactSchema.safeParse({
      name: "Jo",
      email: "jo@example.com",
      message: "short",
    });

    expect(result.success).toBe(false);
  });

  it("accepts valid payload", () => {
    const result = contactSchema.safeParse({
      name: "Jo Daniels",
      email: "jo@example.com",
      message: "This is a detailed message that has plenty of characters.",
      company: "NeoBank",
    });

    expect(result.success).toBe(true);
  });
});

