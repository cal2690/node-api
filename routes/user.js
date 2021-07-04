const { Router } = require('express');
const { usersGet, userGet, userPost, userPut, userDelete } = require('../controllers/user');
const router = Router();

router.get('/', usersGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.delete('/:id', userDelete);



module.exports = router;