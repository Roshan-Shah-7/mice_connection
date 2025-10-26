
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS for production deployment
const corsOptions = {
  origin: process.env.FRONTEND_URL 
    ? [process.env.FRONTEND_URL, 'https://themiceconnection.com', 'https://www.themiceconnection.com', 'http://localhost:5173', 'http://localhost:3000'] 
    : ['https://themiceconnection.com', 'https://www.themiceconnection.com', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Add a root handler to return JSON instead of default "It works!" text
app.get('/', (req, res) => {
    res.json({ message: 'The MICE Connection API Server' });
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, phone, subject, message, tourName } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Name, email, and message are required fields.' 
        });
    }

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
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1f423b; color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Inquiry from Your Website</h1>
            </div>
            <div style="padding: 20px;">
                <h2 style="color: #1f423b; border-bottom: 2px solid #fcd00d; padding-bottom: 10px;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold; width: 120px;">Name:</td>
                        <td style="padding: 10px;">${name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Email:</td>
                        <td style="padding: 10px;">${email}</td>
                    </tr>
                    ${phone ? `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Phone:</td>
                        <td style="padding: 10px;">${phone}</td>
                    </tr>` : ''}
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Subject:</td>
                        <td style="padding: 10px;">${subject}</td>
                    </tr>
                    ${tourName ? `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Tour Name:</td>
                        <td style="padding: 10px;">${tourName}</td>
                    </tr>` : ''}
                </table>
                <h2 style="color: #1f423b; border-bottom: 2px solid #fcd00d; padding-bottom: 10px; margin-top: 20px;">Message</h2>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
                    <p style="margin: 0;">${message}</p>
                </div>
            </div>
            <div style="background-color: #f2f2f2; color: #777; padding: 15px; text-align: center; font-size: 12px;">
                <p>This email was sent from the contact form on The MICE Connection website.</p>
            </div>
        </div>
        `
    };

    console.log('Attempting to send email with the following options:');
    console.log(mailOptions);
    console.log('Using transporter with user:', process.env.EMAIL_USER);

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email. Check server logs for details.' });
    }
});

// Add a catch-all route handler for any non-API routes to prevent "It works!" response
app.get('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        message: 'The requested endpoint does not exist'
    });
});

// Add a catch-all route handler for any non-API POST routes
app.post('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found', 
        message: 'The requested endpoint does not exist'
    });
});

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

if (!emailUser || !emailPass) {
    console.error('Email credentials are not set in the environment variables. Please create a .env file and add EMAIL_USER and EMAIL_PASS.');
    process.exit(1);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`API endpoints available at: http://localhost:${port}/api/send-email`);
});
