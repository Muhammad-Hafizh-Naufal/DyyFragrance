import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "buatujicobaalgo@gmail.com",
      pass: "xhonejaeloyuwdtv",
    },
  });

  const data = req.body;
  const name = data.get("name");
  console.log(name);
  const email = data.get("email");
  console.log(email);
  const subject = data.get("subject");
  console.log(subject);
  const message = data.get("message");
  console.log(email);

  const info = await transporter.sendMail({
    from: "buatujicobaalgo@gmail.com",
    to: email,
    subject: subject,
    text: message,
  });

  console.log("Message sent: %s", info.messageId);
  res.status(200).json({ success: true });
}
