const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");

router.get('/admin/login', AdminController.showLogin)
router.post('/admin/login', AdminController.login)

module.exports = router;