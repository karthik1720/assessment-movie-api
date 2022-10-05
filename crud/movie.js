import { db1 } from "../utils/db.js";

export const addMovie = async (req, res, next) => {
  console.log("hi");
  try {
    const { name, rating, cast, genre, releasedate } = req.body;

    const q = `insert into MOVIES values ('${name}','${rating}','${cast}','${genre}','${releasedate}')`;
    db1(q, function cb(err, result) {
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = (req, res) => {
  try {
    const name = req.params.name;
    console.log(name);
    const q = `delete from MOVIES where NAME = '${name}'`;
    db1(q, function cb(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = (req, res) => {
  try {
    const name = req.params.name;
    const { updateWhat, updateVal } = req.body;

    const q = `update MOVIES set ${updateWhat} = '${updateVal}' where NAME = '${name}' `;
    db1(q, function cb(err, result) {
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = (req, res) => {
  try {
    const q = `select * from MOVIES where NAME = '${req.params.name}'`;
    db1(q, function cb(err, result) {
      res.send(result);
    });
  } catch (error) {}
};
