import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema, sendContactMessage } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);
    const result = await sendContactMessage(payload);
    return NextResponse.json({ status: result.status });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Validation failed", issues: error.flatten() },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { message: "Unable to send message right now." },
      { status: 500 }
    );
  }
}

