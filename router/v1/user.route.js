const express = require('express');
const router = express.Router();
const getUserController = require('../../controller/controller')

router
    .route('/')
    .get(getUserController.getUserAll)

router
    .route('/user/random')
    .get(getUserController.getRandomUser)

router
    .route('/user/save')
    .post(getUserController.postUser)

router.route('/user/update/:id')
    .patch(getUserController.patchUser)
router.route('/user/delete/:id').delete(getUserController.deleteUser)



module.exports = router;