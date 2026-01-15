import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message, subject, company } = req.body;

    // Honeypot anti-spam (if 'company' is filled, it's a bot)
    if (company) return res.status(200).end();

    if (!name || !email || !message || !subject) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_EMAIL}>`,
            to: process.env.SMTP_EMAIL,
            replyTo: email,
            subject: `New Contact Form: ${name}`,
            html: `
        <h3>New Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Email failed" });
    }
}
