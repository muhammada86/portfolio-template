"use server";

import { personalData } from "@/utils/data/personalData";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const currentDate = new Date().toLocaleDateString();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #7c3aed;
            color: #ffffff;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .content {
            padding: 20px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #4b5563;
            margin-bottom: 5px;
          }
          .field-value {
            color: #1f2937;
            background-color: #f3f4f6;
            padding: 10px;
            border-radius: 4px;
          }
          .message-box {
            background-color: #f3f4f6;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 0.875rem;
            border-top: 1px solid #e5e7eb;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Received on ${currentDate}</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">From</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">
                  ${email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">
                <a href="tel:${phone}" style="color: #7c3aed; text-decoration: none;">
                  ${phone}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" 
                 style="background-color: #7c3aed; color: white; padding: 12px 24px; 
                        border-radius: 4px; text-decoration: none; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated message from your contact form.</p>
            <p style="margin: 0;">© ${new Date().getFullYear()} ${
    personalData.name
  }. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  try {
    await resend.emails.send({
      from: `${personalData.name} <onboarding@resend.dev>`,
      to: personalData.email,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: EmailTemplate({ name, email, phone, message }),
    });

    // Send an auto-reply to the sender
    await resend.emails.send({
      from: `${personalData.name} <onboarding@resend.dev>`,
      to: email,
      subject: `Thank you for your message, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: sans-serif; line-height: 1.6; }
            </style>
          </head>
          <body>
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>Thank you for reaching out!</h2>
              <p>Hello ${name},</p>
              <p>I've received your message and will get back to you as soon as possible.</p>
              <p>Best regards,<br>${personalData.name}</p>
            </div>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "Thank you for your message. I'll get back to you soon!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again later.",
    };
  }
}
