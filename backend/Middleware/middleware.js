const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login again." });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_TOKEN);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Error Occurred" });
  }
};

module.exports = authMiddleware;
