const express = require('express');
const { registerUser, findUser, updateUser, deleteUser } = require('../controllers/user');
const router = express.Router();


router.post('/signup', registerUser);
router.post('/login', findUser);
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)
module.exports = router;