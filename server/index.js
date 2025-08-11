import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import { z } from "zod";

const app = express();
const port = process.env.PORT || 5174;

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));

const limiter = rateLimit({ windowMs: 60 * 1000, max: 5 });
app.use("/api/", limiter);

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long"),
  email: z.string().email("Please enter a valid email").max(200),
  message: z
    .string()
    .min(2, "Message must be at least 10 characters")
    .max(500000, "Message too long"),
  website: z.string().optional(), // honeypot
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Boolean(process.env.SMTP_SECURE === "true"),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      const issues =
        parsed.error.issues?.map((i) => ({
          field: i.path[0],
          message: i.message,
        })) || [];
      return res
        .status(400)
        .json({ ok: false, error: "Invalid input", issues });
    }
    const { name, email, message, website } = parsed.data;

    if (website) {
      return res.status(200).json({ ok: true });
    }

    const toEmail = process.env.TO_EMAIL;
    if (!toEmail) {
      return res
        .status(500)
        .json({ ok: false, error: "Server not configured" });
    }

    await transporter.sendMail({
      from: `Portfolio Contact <${
        process.env.SMTP_FROM || process.env.SMTP_USER
      }>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Failed to send" });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
