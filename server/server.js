import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, subject, message, tourName } = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use 'true' for port 465, 'false' for other ports like 587
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'rs6433688@gmail.com',
        subject: subject || `Tour Booking Inquiry for ${tourName}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            ${tourName ? `<p><strong>Tour Name:</strong> ${tourName}</p>` : ''}
        `
    };
    console.log('Attempting to send email with the following options:');
    console.log(mailOptions);
    console.log('Using transporter with user:', process.env.EMAIL_USER);
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email. Check server logs for details.' });
    }
});
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
if (!emailUser || !emailPass) {
    console.error('Email credentials are not set in the environment variables. Please create a .env file and add EMAIL_USER and EMAIL_PASS.');
    process.exit(1);
}
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
