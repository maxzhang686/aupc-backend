const express = require("express");

const router = express.Router();

//move the logic to controllers
// router.get("/", (req, res) => {
//   res.send("hello from router!");
// });

const {
  signup,
  signin,
  signout,
  requireSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

//testsignin
// router.get("/testsignin", requireSignin, (req, res) => {
//   res.send("sign in succeed");
// });

module.exports = router;
