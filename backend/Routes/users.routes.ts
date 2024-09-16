import express from "express";

const userControllers = require("../Controllers/users.controllers");

const router = express.Router();

router.get("/signin", userControllers.signIn);

module.exports = router;
