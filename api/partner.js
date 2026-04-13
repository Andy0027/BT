import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, interest, message } = req.body;

  if (!name || !email || !company || !interest) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER, // Send to the admin's email
      replyTo: email, // Reply to the user
      subject: `Brilliant Technologies - New Partnership Application from ${company}`,
      html: `
        <h3>New Partnership Application</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${company}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Partnership Type:</strong> ${interest}</p>
        <p><strong>Message / Goals:</strong><br/>${message || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Partnership email sent successfully.");
    return res.status(200).json({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Partnership email error:", error);
    return res.status(500).json({ error: "Failed to send application." });
  }
}
