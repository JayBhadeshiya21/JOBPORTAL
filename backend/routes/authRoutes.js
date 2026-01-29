const express = require("express");
const router = express.Router();

// Your routes here
router.post("/login", (req, res) => { /* ... */ });

// MAKE SURE THIS LINE EXISTS:
module.exports = router;