const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

/*
    Method: POST
    URL: /api/auth/google
    Description: 
 */

router.post("/google", AuthController.userLoginWithGoogleAuth);

module.exports = router;
