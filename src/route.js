const express = require("express");
const router = express.Router();
const User = require("./route/user");


// add user
router.post("/add", function (req, res) {
  const newUser = new User(req.body);
  console.log(newUser)
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
// find all users
router.get("/find", function (req, res) {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});
//findbyid
router.get("/:id", function (req, res) {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.get("/search", async (req, res) => {
  console.log("here is the request");
  const query = req.query;
  console.log("query", query);

  const search = await User.find(query);
  console.log(search);
  res.send(search);
});
router.patch("/findone/:id", async (req, res) => {
  const { id } = req.params;
  var food = req.body.favoriteFood;
  console.log(food)
  const person = await User.findOne({ _id: id });
  console.log(person)
  await person.updateOne({ favoriteFood: food });
  await person.save();
  res.send(person);
});
router.delete("/delete/:id", function (req, res, next) {
  const { id } = req.params;

  User.findByIdAndRemove({ _id: id }, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});
router.get("/search", async (req, res) => {
  console.log("here is the request");
  const query = req.query;
  console.log("query", query);

  const search = await User.find(query);
  console.log(search);
  res.send(search);
});
router.delete("/deletemany", (req, res, next) => {
  User.remove(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


module.exports = r