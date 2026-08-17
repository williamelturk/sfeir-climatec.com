import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email and message are required" },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env;

  if (!SMTP_HOST || !EMAIL_ADDRESS || !EMAIL_PASSWORD) {
    console.error(
      "Mail not configured: missing SMTP_HOST, EMAIL_ADDRESS or EMAIL_PASSWORD"
    );
    return NextResponse.json(
      { message: "Mail is not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL_ADDRESS, // send from the authenticated account
      replyTo: email, // reply goes to the visitor
      to: EMAIL_ADDRESS,
      subject: `Contact form submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
