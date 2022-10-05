import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.send("Not authenticated");
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      res.send("invalid token");
    }
    req.user = user;
    next();
  });
};
