import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill in all required fields." });
  }

  const user = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "mrabdulrehman461@gmail.com";
  const pass = process.env.EMAIL_PASSWORD;

  if (!pass || pass === "put_app_password_here") {
    console.warn("EMAIL_PASSWORD is not configured in .env.local yet.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${user}>`,
    to: "mrabdulrehman461@gmail.com",
    replyTo: email,
    subject: `Portfolio Contact: ${name} sent you a message`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
        <h2 style="color: #6d28d9; border-bottom: 2px solid #6d28d9; padding-bottom: 8px;">New Message from Portfolio</h2>
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="margin-top: 16px; padding: 16px; background-color: #f3f4f6; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #4b5563;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Your message was sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({
      message: error?.message || "There was an error sending your message. Please try again later.",
    });
  }
}
