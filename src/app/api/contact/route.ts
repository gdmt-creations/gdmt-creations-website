import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, query, services } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"GDMT Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Submission from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Query:</strong><br/>${query}</p>
      <p><strong>Services Interested:</strong> ${
        services?.join(', ') || 'None selected'
      }</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Failed to send email:', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
