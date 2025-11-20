import { Resend } from "resend";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z
    .string()
    .email("Please provide a valid email so I can respond.")
    .min(5),
  company: z.string().optional(),
  message: z.string().min(30, "A little more context helps me help you."),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

const resendApiKey = process.env.RESEND_API_KEY ?? "empty_for_now";
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const forwardEmail =
  process.env.CONTACT_FORWARD_EMAIL ?? "support@posadskiy.com";

export async function sendContactMessage(payload: ContactFormInput) {
  if (!resend) {
    console.warn("RESEND_API_KEY is not configured. Message logged only.");
    console.info(payload);
    return { status: "queued-without-email" as const };
  }

  await resend.emails.send({
    from: "Portfolio Contact <hello@mail.dimitri.dev>",
    to: [forwardEmail],
    subject: `New message from ${payload.name}`,
    reply_to: payload.email,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Company: ${payload.company}` : "",
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return { status: "sent" as const };
}

