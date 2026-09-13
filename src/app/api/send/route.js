import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;
  const emailContent = (
    <>
      <p>Nombre: {name}</p>
      <p>Correo de: {email}</p>
      <p>{message}</p>
    </>
  );

  if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio contact from ${name}`,
      react: emailContent,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to send email' }, { status: 500 });
  }
}
