import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log(name, email, message);

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [`${process.env.EMAIL}`],
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f4f5; padding:40px 20px;">
      <div style="max-width:700px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
      <div style="background:linear-gradient(135deg,#dc2626,#7f1d1d); padding:30px;">
       <h1 style="margin:0; color:white; font-size:28px;">
       New Portfolio Inquiry
       </h1>
       <p style="margin-top:8px; color:#fecaca;">
       Someone contacted you through your portfolio website.
       </p>
       </div>

    <div style="padding:30px;">

  <table style="width:100%; border-collapse:collapse;">
    <tr>
      <td style="padding:12px 0; font-weight:bold; color:#111827; width:120px;">
        Name
      </td>
      <td style="padding:12px 0; color:#374151;">
        ${name}
      </td>
    </tr>

    <tr>
      <td style="padding:12px 0; font-weight:bold; color:#111827;">
        Email
      </td>
      <td style="padding:12px 0; color:#374151;">
        ${email}
      </td>
    </tr>

    <tr>
      <td style="padding:12px 0; font-weight:bold; color:#111827;">
        Date
      </td>
      <td style="padding:12px 0; color:#374151;">
        ${new Date().toLocaleString()}
      </td>
    </tr>
  </table>

  <div style="margin-top:25px;">
    <h3 style="margin-bottom:10px; color:#111827;">
      Message
    </h3>

    <div style="
      background:#f9fafb;
      border:1px solid #e5e7eb;
      border-radius:12px;
      padding:20px;
      line-height:1.8;
      color:#374151;
    ">
      ${message}
    </div>
  </div>

  <div style="margin-top:30px;">
    <a
      href="mailto:${email}"
      style="
        display:inline-block;
        background:#dc2626;
        color:white;
        text-decoration:none;
        padding:12px 24px;
        border-radius:10px;
        font-weight:bold;
      "
    >
      Reply to ${name}
    </a>
  </div>

</div>

<div style="
  background:#111827;
  color:#9ca3af;
  text-align:center;
  padding:20px;
  font-size:13px;
">
  <p style="margin:0;">
    Abhishek Singh • MCA 2026 Graduate • MERN Stack Developer
  </p>

  <p style="margin-top:8px;">
    Portfolio Contact Form Notification
  </p>
</div>


  </div>
</div>`,
    });

    console.log(error);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
