const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Store OTPs temporarily
const otpStorage = new Map();

// Send OTP endpoint
app.post('/api/auth/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP with expiration (5 minutes)
    otpStorage.set(email, {
      otp: otp,
      expiresAt: Date.now() + 5 * 60 * 1000
    });
    
    console.log(`📧 OTP for ${email}: ${otp}`);
    
    // Try to send real email, but if fails, still work in demo mode
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your CareerConnect Verification Code',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
            <h2 style="color: #667eea;">CareerConnect Email Verification</h2>
            <p>Your verification code is:</p>
            <h1 style="font-size: 32px; color: #667eea; text-align: center; letter-spacing: 5px; 
                       background: #f8f9fa; padding: 20px; border-radius: 8px;">${otp}</h1>
            <p>This code will expire in 5 minutes.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">CareerConnect</p>
          </div>
        `
      };
      
      await transporter.sendMail(mailOptions);
      console.log(`✅ Email sent to ${email}`);
      
      res.json({
        success: true,
        message: 'OTP sent successfully to your email'
      });
      
    } catch (emailError) {
      console.log('📧 Email failed, using demo mode');
      res.json({
        success: true,
        message: 'OTP sent (demo mode - check server console)',
        demo_otp: otp
      });
    }
    
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send OTP'
    });
  }
});

// Verify OTP endpoint
app.post('/api/auth/verify-otp', (req, res) => {
  try {
    const { email, otp } = req.body;
    
    const storedData = otpStorage.get(email);
    
    if (!storedData) {
      return res.status(400).json({
        success: false,
        error: 'OTP expired or not found'
      });
    }
    
    if (Date.now() > storedData.expiresAt) {
      otpStorage.delete(email);
      return res.status(400).json({
        success: false,
        error: 'OTP has expired'
      });
    }
    
    if (storedData.otp !== otp) {
      return res.status(400).json({
        success: false,
        error: 'Invalid OTP'
      });
    }
    
    otpStorage.delete(email);
    
    res.json({
      success: true,
      message: 'OTP verified successfully'
    });
    
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'Error verifying OTP'
    });
  }
});

// Other routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'CareerConnect API is running!' });
});

app.post('/api/auth/register', (req, res) => {
  const { full_name, email, position } = req.body;
  res.json({ 
    success: true, 
    message: 'Registration successful!',
    user: { id: Date.now(), email, full_name, position }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  const userName = email.split('@')[0];
  const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);
  
  res.json({
    success: true,
    message: 'Login successful!',
    user: { id: Date.now(), email, full_name: formattedName, position: 'college' }
  });
});

// Reviews routes
app.get('/api/reviews/stats', (req, res) => {
  res.json({
    success: true,
    data: { totalReviews: 0, totalCompanies: 0, averageRating: 0 }
  });
});

app.get('/api/reviews', (req, res) => {
  res.json({ success: true, data: [] });
});

app.post('/api/reviews', (req, res) => {
  res.json({ success: true, message: 'Review submitted successfully!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email system ready`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});
