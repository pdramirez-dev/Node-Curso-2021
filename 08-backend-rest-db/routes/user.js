const {Router} = require ('express');
const router = Router();
const { getUsers, 
        postUser,
        putUser, 
        deleteUser } = require('../controllers/user');
router.get('/',getUsers);
router.post('/',postUser);
router.put('/:id',putUser);
router.delete('/',deleteUser);

module.exports = router;