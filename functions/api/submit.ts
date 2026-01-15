interface Env {
    RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        // 1. Parse content
        const body = await context.request.json() as any;
        const { name, email, subject, message } = body;

        // 2. Validate input
        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 3. Send Email (Example using Resend)
        // You must set RESEND_API_KEY in your Cloudflare Pages environment variables
        if (context.env.RESEND_API_KEY) {
            const res = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'Portfolio Contact Form <onboarding@resend.dev>', // Update this with your verified domain
                    to: 'dipeshsonitech@gmail.com',
                    subject: `New Contact: ${subject}`,
                    html: `
            <h3>New Message from Portfolio</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
                })
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Email API Error:', errorText);
                throw new Error('Failed to send email');
            }
        } else {
            // Fallback or Log if no API key is present (for development/testing without key)
            console.log("Simulating email send (No API Key provided):", { name, email, subject, message });
        }

        // 4. Return success
        return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err: any) {
        console.error('Submission error:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
