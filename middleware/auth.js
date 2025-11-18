// middleware/auth.js


function auth(req, res, next) {
  // Check if admin query parameter is "true"
  const isAdmin = req.query.admin === 'true';
  
  if (isAdmin) {
    // Admin access granted - let them through to the next handler
    next();
  } else {
   
    res.status(403).json({ 
      message: "Access denied. You need admin privileges." 
    });
  }
}

module.exports = auth;