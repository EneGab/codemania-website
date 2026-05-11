import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[\d\s\+\-\(\)]{7,15}$/.test(phone);
}

function validateName(name: string) {
  return /^[a-zA-Z\s\-']{2,50}$/.test(name.trim());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, message } = body;

    const errors: Record<string, string> = {};

    if (!firstName || !validateName(firstName))
      errors.firstName = "Please enter a valid first name.";
    if (!lastName || !validateName(lastName))
      errors.lastName = "Please enter a valid last name.";
    if (!email || !validateEmail(email))
      errors.email = "Please enter a valid email address.";
    if (!phone || !validatePhone(phone))
      errors.phone = "Phone number must contain only numbers.";
    if (!message || message.trim().length < 10)
      errors.message = "Message must be at least 10 characters.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const submission = await prisma.contactRequest.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company?.trim() || null,
        message: message.trim(),
        status: "new",
      },
    });

    const submittedAt = new Date(submission.createdAt).toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/admin?secret=${process.env.ADMIN_SECRET}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background:#f4f4f5;font-family:sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="background:#0A0A0A;padding:32px 40px;">
                    <table width="100%">
                      <tr>
                        <td>
                          <span style="color:#F4511E;font-size:22px;font-weight:800;">{} </span>
                          <span style="color:#ffffff;font-size:20px;font-weight:700;">CodeMania</span>
                        </td>
                        <td align="right">
                          <span style="background:#F4511E;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;">NEW REQUEST</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 40px 16px;">
                    <h1 style="margin:0;font-size:24px;font-weight:800;color:#0A0A0A;">New Contact Request</h1>
                    <p style="margin:8px 0 0;color:#6B7280;font-size:14px;">Submitted on ${submittedAt}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 32px;">
                    <table width="100%" style="background:#f9fafb;border-radius:12px;">
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                          <p style="margin:0;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;">Full Name</p>
                          <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0A0A0A;">${firstName} ${lastName}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                          <p style="margin:0;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;">Email</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#F4511E;">${email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                          <p style="margin:0;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;">Phone</p>
                          <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0A0A0A;">${phone}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                          <p style="margin:0;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;">Company</p>
                          <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#0A0A0A;">${company || "N/A"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;">Message</p>
                          <p style="margin:8px 0 0;font-size:15px;color:#374151;line-height:1.7;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 40px 40px;">
                    <table width="100%">
                      <tr>
                        <td>
                          <a href="${adminUrl}" style="display:inline-block;background:#0A0A0A;color:#ffffff;font-size:14px;font-weight:700;padding:14px 28px;border-radius:100px;text-decoration:none;">
                            View All Requests
                          </a>
                        </td>
                        <td align="right">
                          <a href="mailto:${email}" style="display:inline-block;border:2px solid #0A0A0A;color:#0A0A0A;font-size:14px;font-weight:700;padding:12px 28px;border-radius:100px;text-decoration:none;">
                            Reply to ${firstName}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f9fafb;padding:20px 40px;border-top:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:12px;color:#9CA3AF;text-align:center;">
                      Sent from codemania.com.ng contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: "CodeMania Contact <onboarding@resend.dev>",
      to: "gabrieleneojo27@gmail.com",
      replyTo: email,
      subject: `New Contact Request from ${firstName} ${lastName}`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent. Codemania will get back to you shortly.",
    });

  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}