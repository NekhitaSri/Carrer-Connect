const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { email, password, full_name, position, user_role, ...additionalData } = req.body;

    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Create new user
    const result = await User.create({
      email,
      password,
      full_name,
      position,
      user_role,
      ...additionalData
    });

    res.status(201).json({ 
      message: 'User created successfully',
      userId: result.insertId 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isPasswordValid = await User.comparePassword(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        role: user.user_role
      }, 
      JWT_SECRET, 
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        role: user.user_role,
        position: user.position
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user role
router.put('/role', async (req, res) => {
  try {
    const { userId, role } = req.body;
    
    await User.updateRole(userId, role);
    res.json({ message: 'Role updated successfully' });
  } catch (error) {
    console.error('Role update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
