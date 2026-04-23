import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "asimsaleem.portfolio@gmail.com";

const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const ipStore = new Map<string, { count: number; windowStart: number }>();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    ipStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 }
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <contact@asimsaleem.online>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject} from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; color: #191A1C;">
        <div style="background: #003149; padding: 20px 24px;">
          <p style="color: #AEC8D5; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">
            Portfolio Contact Form
          </p>
        </div>
        <div style="padding: 24px; border: 1px solid #DFDCD8;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="color: #888; padding: 6px 0; width: 80px;">Name</td><td style="color: #191A1C;">${name}</td></tr>
            <tr><td style="color: #888; padding: 6px 0;">Email</td><td><a href="mailto:${email}" style="color: #006879;">${email}</a></td></tr>
            <tr><td style="color: #888; padding: 6px 0;">Subject</td><td style="color: #191A1C;">${subject}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #DFDCD8; margin: 16px 0;" />
          <p style="color: #191A1C; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
