import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, company, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "CodeMania Website <onboarding@resend.dev>",
      to: "info@codemania.com.ng",
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#0A0A0A;margin-bottom:24px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;width:120px;">NAME</td><td style="padding:8px 0;font-size:14px;font-weight:600;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">EMAIL</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#F4511E;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">COMPANY</td><td style="padding:8px 0;font-size:14px;">${company || "—"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:10px;">
            <p style="color:#6B7280;font-size:13px;margin:0 0 8px;">MESSAGE</p>
            <p style="color:#0A0A0A;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#9CA3AF;font-size:12px;margin-top:24px;">Sent from codemania.com.ng contact form. Reply directly to respond to ${firstName}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}