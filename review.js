const express = require('express');
const db = require('../config/database');
const router = express.Router();

// Get all approved reviews
router.get('/', (req, res) => {
  const query = `
    SELECT r.*, u.full_name 
    FROM reviews r 
    JOIN users u ON r.user_id = u.id 
    WHERE r.is_approved = TRUE 
    ORDER BY r.created_at DESC
  `;
  
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error fetching reviews:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

// Get reviews by company
router.get('/company/:companyName', (req, res) => {
  const { companyName } = req.params;
  
  const query = `
    SELECT r.*, u.full_name 
    FROM reviews r 
    JOIN users u ON r.user_id = u.id 
    WHERE r.company_name = ? AND r.is_approved = TRUE 
    ORDER BY r.rating DESC
  `;
  
  db.execute(query, [companyName], (err, results) => {
    if (err) {
      console.error('Error fetching company reviews:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
});

// Create new review
router.post('/', (req, res) => {
  const {
    user_id,
    experience_type,
    company_name,
    job_role,
    duration,
    rating,
    experience_details,
    location,
    stipend_salary,
    pros,
    cons
  } = req.body;

  const query = `
    INSERT INTO reviews 
    (user_id, experience_type, company_name, job_role, duration, rating, experience_details, location, stipend_salary, pros, cons) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.execute(query, [
    user_id, experience_type, company_name, job_role, duration, rating, 
    experience_details, location, stipend_salary, pros, cons
  ], (err, results) => {
    if (err) {
      console.error('Error creating review:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Update company stats
    updateCompanyStats(company_name);

    res.status(201).json({ 
      message: 'Review submitted successfully', 
      reviewId: results.insertId 
    });
  });
});

// Get dashboard statistics
router.get('/stats', (req, res) => {
  const queries = {
    totalReviews: 'SELECT COUNT(*) as count FROM reviews WHERE is_approved = TRUE',
    totalCompanies: 'SELECT COUNT(DISTINCT company_name) as count FROM reviews WHERE is_approved = TRUE',
    averageRating: 'SELECT AVG(rating) as average FROM reviews WHERE is_approved = TRUE'
  };

  Promise.all([
    executeQuery(queries.totalReviews),
    executeQuery(queries.totalCompanies),
    executeQuery(queries.averageRating)
  ]).then(([reviews, companies, rating]) => {
    res.json({
      totalReviews: reviews[0].count,
      totalCompanies: companies[0].count,
      averageRating: Math.round(rating[0].average * 10) / 10 || 0
    });
  }).catch(error => {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  });
});

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    db.execute(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

function updateCompanyStats(companyName) {
  const statsQuery = `
    INSERT INTO companies (name, average_rating, total_reviews) 
    VALUES (?, (SELECT AVG(rating) FROM reviews WHERE company_name = ? AND is_approved = TRUE), 
           (SELECT COUNT(*) FROM reviews WHERE company_name = ? AND is_approved = TRUE))
    ON DUPLICATE KEY UPDATE 
    average_rating = (SELECT AVG(rating) FROM reviews WHERE company_name = ? AND is_approved = TRUE),
    total_reviews = (SELECT COUNT(*) FROM reviews WHERE company_name = ? AND is_approved = TRUE)
  `;

  db.execute(statsQuery, [companyName, companyName, companyName, companyName, companyName]);
}

module.exports = router;
