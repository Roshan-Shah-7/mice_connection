
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS for production deployment
const allowedOrigins = [
  'https://themiceconnection.com',
  'https://www.themiceconnection.com'
];

if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:5173', 'http://localhost:3000');
}

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
  preflightContinue: true, // Pass the CORS preflight response to the next handler
};
app.use(cors(corsOptions));
app.use(express.json());

// Add a root handler to return JSON instead of default "It works!" text
app.get('/', (_req, res) => {
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
            ciphers: 'SSLv3'
        }
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO,
        subject: subject || `Tour Booking Inquiry for ${tourName}`,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1f423b; color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">New Inquiry from The Website</h1>
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

    console.log(`Attempting to send email to ${process.env.EMAIL_TO}...`);

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error sending email:', error.message);
        } else {
            console.error('An unknown error occurred:', error);
        }
        // Avoid exposing detailed error messages to the client
        res.status(500).json({ success: false, message: 'An unexpected error occurred. Please try again later.' });
    }
});

// Add a catch-all route handler for any non-API routes to prevent "It works!" response
app.get(/(.*)/, (_req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: 'The requested endpoint does not exist'
    });
});

// Add a catch-all route handler for any non-API POST routes
app.post(/(.*)/, (_req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: 'The requested endpoint does not exist'
    });
});

const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
    console.error('Please create a .env file and add the missing variables.');
    process.exit(1);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`API endpoints available at: http://localhost:${port}/api/send-email`);
});
