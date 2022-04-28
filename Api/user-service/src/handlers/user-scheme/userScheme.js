(express = require("express")), (router = express.Router());
const auth = require("../../middlewares/authentication");
const { UserScheme } = require("../../models/user-scheme/user-scheme");


router.route("/hi").get(async (req, res) => {
  res.send("hi")
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  try {
    const loginResponse = await UserScheme.Login(email, password);

    return res.status(200).json(loginResponse);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
