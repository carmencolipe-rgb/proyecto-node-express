const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@email.com" && password === "1234") {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    return res.json({
      mensaje: "Login correcto",
      token
    });
  }

  return res.status(401).json({
    mensaje: "Credenciales incorrectas"
  });
};

module.exports = { login };