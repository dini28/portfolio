import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    message?: string;
    subject?: string;
    company?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message, subject, company } = body;

  // Honeypot anti-spam (if 'company' is filled, it's a bot)
  if (company) return new NextResponse(null, { status: 200 });

  if (!name || !email || !message || !subject) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  if (
    name.length > 200 ||
    email.length > 200 ||
    subject.length > 500 ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: 'Input too long' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${safeName}`,
      html: `
        <h3>New Form Submission</h3>
        <p><b>Name:</b> ${safeName}</p>
        <p><b>Email:</b> ${safeEmail}</p>
        <p><b>Subject:</b> ${safeSubject}</p>
        <p><b>Message:</b><br>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
