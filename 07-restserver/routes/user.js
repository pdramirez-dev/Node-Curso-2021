const {Router} = require ('express');
const router = Router();
const { getUsers, 
        postUser,
        putUser, 
        deleteUser } = require('../controllers/user.controlles');
router.get('/',getUsers);
router.post('/',postUser);
router.put('/',putUser);
router.delete('/',deleteUser);

module.exports = router;