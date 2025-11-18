// routes/userRouter.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


const {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
} = require('../controllers/userControllers');

// Define routes
router.get('/', getAllUsersHandler);             // GET /users
router.get('/:userId', getUserByIdHandler);     // GET /users/1
router.post('/', auth, createUserHandler);            // POST /users
router.put('/:userId', auth, updateUserHandler);      // PUT /users/1
router.delete('/:userId', auth, deleteUserHandler);   // DELETE /users/1

module.exports = router;