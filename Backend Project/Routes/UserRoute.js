const express = require('express')
const UserController = require('./../Controller/UserController')

const router = express.Router();

router
    .route('/:id')
    .get(UserController.getUser)
    .patch(UserController.UpdateUser)
    .delete(UserController.deleteUser)


router
    .route('/')
    .get(UserController.getAllUsers)
    .post(UserController.createUser)


module.exports = router