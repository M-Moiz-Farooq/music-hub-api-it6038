const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../api/models/user');

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed });
    await user.save();
    res.status(201).json({ message: 'User created', userId: user._id });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Auth failed' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Auth failed' });

    const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_KEY || 'change_this_secret', { expiresIn: '1h' });
    res.status(200).json({ token, expiresIn: 3600 });
  } catch (err) {
    next(err);
  }
};
