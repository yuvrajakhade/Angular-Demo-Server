const router = require("express-promise-router")();
const authController = require("../controllers/auth.controller");

router.get("/user", authController.findUser);
router.get("/user/:id", authController.findUserById);

module.exports = router;
