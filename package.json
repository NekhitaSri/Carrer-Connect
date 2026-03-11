<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CareerConnect | Internship & Placement Reviews</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 1200px;
        }

        .page {
            display: none;
            width: 100%;
        }

        .page.active {
            display: block;
        }

        .auth-card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            max-width: 480px;
            margin: 0 auto;
        }

        .logo {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo h1 {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
        }

        .logo p {
            color: #666;
            font-size: 1rem;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #555;
        }

        .form-control {
            width: 100%;
            padding: 14px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-control:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 14px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #667eea;
            border: 2px solid #667eea;
            padding: 14px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background: rgba(102, 126, 234, 0.1);
        }

        .form-links {
            text-align: center;
            margin-top: 20px;
        }

        .form-links a {
            color: #667eea;
            text-decoration: none;
            font-size: 0.9rem;
        }

        .form-links a:hover {
            text-decoration: underline;
        }

        .divider {
            text-align: center;
            margin: 25px 0;
            position: relative;
        }

        .divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: #ddd;
        }

        .divider span {
            background: white;
            padding: 0 15px;
            color: #666;
            font-size: 0.9rem;
        }

        /* Role Selection */
        .role-selection {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 30px 0;
        }

        .role-card {
            border: 2px solid #ddd;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .role-card:hover {
            border-color: #667eea;
            transform: translateY(-5px);
        }

        .role-card.selected {
            border-color: #667eea;
            background: rgba(102, 126, 234, 0.05);
        }

        .role-icon {
            font-size: 2.5rem;
            color: #667eea;
            margin-bottom: 15px;
        }

        .role-card h3 {
            margin-bottom: 10px;
            color: #333;
        }

        .role-card p {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.4;
        }

        /* Dashboard */
        .dashboard {
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            min-height: 80vh;
        }

        .dashboard-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .dashboard-header h1 {
            font-size: 1.8rem;
            font-weight: 700;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .user-avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1.2rem;
        }

        .logout-btn {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .logout-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .dashboard-content {
            padding: 30px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border-left: 4px solid #667eea;
        }

        .stat-number {
            font-size: 2.2rem;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 8px;
        }

        .stat-label {
            color: #666;
            font-size: 0.9rem;
        }

        .review-card {
            background: white;
            border: 1px solid #eee;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .review-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .company-name {
            font-weight: 600;
            color: #667eea;
            font-size: 1.1rem;
        }

        .rating {
            color: #ffc107;
        }

        .review-meta {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 12px;
        }

        .review-content {
            line-height: 1.6;
            color: #555;
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            border-left: 4px solid #28a745;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 12px;
            transform: translateX(150%);
            transition: transform 0.3s ease;
        }

        .toast.show {
            transform: translateX(0);
        }

        .toast.error {
            border-left-color: #dc3545;
        }

        .toast-icon {
            font-size: 1.2rem;
        }

        .toast.success .toast-icon {
            color: #28a745;
        }

        .toast.error .toast-icon {
            color: #dc3545;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .auth-card {
                padding: 25px;
            }
            
            .logo h1 {
                font-size: 2rem;
            }

            .role-selection {
                grid-template-columns: 1fr;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .dashboard-header {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }

            .dashboard-content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Login Page -->
        <div id="loginPage" class="page active">
            <div class="auth-card">
                <div class="logo">
                    <h1>CareerConnect</h1>
                    <p>Your gateway to authentic internship & placement reviews</p>
                </div>
                
                <form id="loginForm">
                    <div class="form-group">
                        <label for="loginEmail">Email Address</label>
                        <input type="email" id="loginEmail" class="form-control" placeholder="Enter your email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="loginPassword">Password</label>
                        <input type="password" id="loginPassword" class="form-control" placeholder="Enter your password" required>
                    </div>
                    
                    <button type="submit" class="btn-primary">Login</button>
                    
                    <div class="form-links">
                        <a href="#" id="forgotPassword">Forgot Password?</a>
                    </div>
                </form>
                
                <div class="divider">
                    <span>New to CareerConnect?</span>
                </div>
                
                <button id="showSignup" class="btn-secondary">Create Account</button>
            </div>
        </div>

        <!-- Role Selection Page -->
        <div id="roleSelectionPage" class="page">
            <div class="auth-card">
                <div class="logo">
                    <h1>Choose Your Role</h1>
                    <p>How would you like to use CareerConnect?</p>
                </div>
                
                <div class="role-selection">
                    <div class="role-card" data-role="viewer">
                        <div class="role-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3>Viewer</h3>
                        <p>Browse and read internship & placement reviews from other students</p>
                    </div>
                    
                    <div class="role-card" data-role="data-giver">
                        <div class="role-icon">
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <h3>Data Giver</h3>
                        <p>Share your internship or placement experience to help others</p>
                    </div>
                </div>
                
                <button id="confirmRole" class="btn-primary" disabled>Continue</button>
            </div>
        </div>

        <!-- Viewer Dashboard -->
        <div id="viewerDashboard" class="page">
            <div class="dashboard">
                <div class="dashboard-header">
                    <h1>CareerConnect - Reviews Dashboard</h1>
                    <div class="user-info">
                        <div class="user-avatar" id="viewerAvatar">U</div>
                        <div>
                            <div id="viewerName">User</div>
                            <div style="font-size: 0.8rem; opacity: 0.8;">Viewer Mode</div>
                        </div>
                        <button class="logout-btn" onclick="logout()">Logout</button>
                    </div>
                </div>
                
                <div class="dashboard-content">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">1,247</div>
                            <div class="stat-label">Total Reviews</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">342</div>
                            <div class="stat-label">Companies</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">89%</div>
                            <div class="stat-label">Positive Experiences</div>
                        </div>
                    </div>
                    
                    <h2 style="margin-bottom: 20px;">Recent Internship Reviews</h2>
                    
                    <div class="review-card">
                        <div class="review-header">
                            <div class="company-name">Google</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        <div class="review-meta">Software Engineering Intern • Summer 2023 • 4.5/5</div>
                        <div class="review-content">
                            Amazing internship experience with excellent mentorship. The projects were challenging but rewarding. The work culture is fantastic with plenty of learning opportunities and great work-life balance.
                        </div>
                    </div>
                    
                    <div class="review-card">
                        <div class="review-header">
                            <div class="company-name">Microsoft</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        <div class="review-meta">Product Management Intern • Spring 2023 • 4.0/5</div>
                        <div class="review-content">
                            Great exposure to product development lifecycle. The team was supportive and the work was impactful. Good conversion rate to full-time offers.
                        </div>
                    </div>

                    <h2 style="margin-bottom: 20px; margin-top: 30px;">Recent Placement Reviews</h2>
                    
                    <div class="review-card">
                        <div class="review-header">
                            <div class="company-name">Amazon</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div class="review-meta">Software Development Engineer • Full-time • 2023 • 5.0/5</div>
                        <div class="review-content">
                            Excellent onboarding process and great team culture. Competitive compensation and challenging projects. Strong focus on customer obsession and leadership principles.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Giver Form -->
        <div id="dataGiverForm" class="page">
            <div class="auth-card">
                <div style="margin-bottom: 20px;">
                    <button class="btn-secondary" onclick="showPage('roleSelectionPage')">
                        <i class="fas fa-arrow-left"></i> Back to Role Selection
                    </button>
                </div>
                
                <h2 style="text-align: center; margin-bottom: 10px;">Share Your Experience</h2>
                <p style="text-align: center; color: #666; margin-bottom: 30px;">Help other students by sharing your internship or placement experience</p>
                
                <form id="experienceForm">
                    <div class="form-group">
                        <label for="experienceType">Experience Type</label>
                        <select id="experienceType" class="form-control" required>
                            <option value="">Select Experience Type</option>
                            <option value="internship">Internship</option>
                            <option value="placement">Placement/Full-time</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="companyName">Company Name</label>
                        <input type="text" id="companyName" class="form-control" placeholder="Enter company name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="jobRole">Job Role/Position</label>
                        <input type="text" id="jobRole" class="form-control" placeholder="Enter your job role" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="duration">Duration</label>
                        <select id="duration" class="form-control" required>
                            <option value="">Select Duration</option>
                            <option value="1-3">1-3 months</option>
                            <option value="3-6">3-6 months</option>
                            <option value="6-12">6-12 months</option>
                            <option value="12+">12+ months</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="rating">Overall Rating</label>
                        <select id="rating" class="form-control" required>
                            <option value="">Select Rating</option>
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Very Good</option>
                            <option value="3">3 - Good</option>
                            <option value="2">2 - Fair</option>
                            <option value="1">1 - Poor</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="experienceDetails">Share your experience details</label>
                        <textarea id="experienceDetails" class="form-control" rows="4" placeholder="Describe your experience..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn-primary">Submit Experience</button>
                </form>
            </div>
        </div>

        <!-- Toast Notification -->
        <div id="toast" class="toast">
            <div class="toast-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">Success</div>
                <div class="toast-message">Operation completed successfully!</div>
            </div>
        </div>
    </div>

    <script>
        // User data storage
        const API_BASE = 'http://localhost:3001/api';
        let currentUser = null;
        let userRole = null;

        // Toast notification function
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastIcon = toast.querySelector('.toast-icon i');
            const toastTitle = toast.querySelector('.toast-title');
            const toastMessage = toast.querySelector('.toast-message');
            
            toast.className = `toast ${type}`;
            toastTitle.textContent = type === 'success' ? 'Success' : 'Error';
            toastMessage.textContent = message;
            
            if (type === 'success') {
                toastIcon.className = 'fas fa-check-circle';
            } else {
                toastIcon.className = 'fas fa-exclamation-circle';
            }
            
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Navigation functions
        function showPage(pageName) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageName).classList.add('active');
        }

        // Role selection
        document.querySelectorAll('.role-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                document.getElementById('confirmRole').disabled = false;
                userRole = this.getAttribute('data-role');
            });
        });

        document.getElementById('confirmRole').addEventListener('click', function() {
            if (userRole === 'viewer') {
                showPage('viewerDashboard');
                document.getElementById('viewerName').textContent = currentUser.name;
                document.getElementById('viewerAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
            } else if (userRole === 'data-giver') {
                showPage('dataGiverForm');
            }
        });

        // Form submissions
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            
            // Simulate login
            currentUser = {
                name: email.split('@')[0],
                email: email
            };
            
            showToast('Login successful!');
            setTimeout(() => {
                showPage('roleSelectionPage');
            }, 1000);
        });

        document.getElementById('experienceForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                experienceType: document.getElementById('experienceType').value,
                companyName: document.getElementById('companyName').value,
                jobRole: document.getElementById('jobRole').value,
                duration: document.getElementById('duration').value,
                rating: document.getElementById('rating').value,
                experienceDetails: document.getElementById('experienceDetails').value
            };
            
            console.log('Experience Data:', formData);
            showToast('Thank you for sharing your experience!');
            
            // Reset form and redirect
            this.reset();
            setTimeout(() => {
                showPage('roleSelectionPage');
            }, 2000);
        });

        // Logout function
        function logout() {
            currentUser = null;
            userRole = null;
            showToast('Logged out successfully');
            setTimeout(() => {
                showPage('loginPage');
            }, 1000);
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            showPage('loginPage');
        });

        // Navigation buttons
        document.getElementById('showSignup').addEventListener('click', function() {
            showToast('Signup functionality would be implemented here');
        });

        document.getElementById('forgotPassword').addEventListener('click', function() {
            showToast('Password reset functionality would be implemented here');
        });
    </script>
</body>
</html>
