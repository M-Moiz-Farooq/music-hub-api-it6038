const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Auth failed: No token' });

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY || 'change_this_secret');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Auth failed: Invalid token' });
  }
};
