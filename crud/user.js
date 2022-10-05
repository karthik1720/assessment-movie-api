import { db1 } from "../utils/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const q = `insert into USER values ('${username}','${email}','${hash}')`;
    db1(q, function cb(err, result) {
      res.send(result);
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const q = `select USERNAME, PASSWORD from USER where USERNAME = '${username}'`;
    db1(q, function cb(err, result) {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log(result);
      if (!result[0]) {
        res.send("No user found");
      } else {
        const hashedPass = result[0].PASSWORD;
        console.log(hashedPass);
        console.log(password);

        const isCorrect = bcrypt.compare(password, hashedPass);
        console.log(isCorrect);
        if (isCorrect) {
          const token = jwt.sign(
            { username: req.body.username },
            process.env.JWT,
            {
              expiresIn: "1h",
            }
          );

          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .json(token);
        } else {
          return next(createError(400, "wrong info"));
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
