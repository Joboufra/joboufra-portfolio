import Cors from 'cors';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import initMiddleware from './init-middleware';

const cors = initMiddleware(
  Cors({
    methods: ['POST'],
  })
)

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  
  await cors(req, res);

  const body = await req.json();
  const { email, subject, message } = body;
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      react: (
        <>
          <p>Correo de: {email}</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error });
  }
}
