const {Router} = require ('express');
const {check} = require('express-validator')
const router = Router();
const { getUsers, 
        postUser,
        putUser, 
        deleteUser } = require('../controllers/user');
const { validateFiles } = require('../middlewares/validate');

 // Routes API        
router.get('/',getUsers);
router.post('/',[
        check('name','The name is required').not().isEmpty(),
        check('email','The email no is valid').isEmail(),
        check('password','The password is required and  more 6 leters').isLength({min:6}),
        check('role',' Dont role permit').isIn(['ADMIN_ROLE','USER_ROLE']),
        validateFiles
],postUser);
router.put('/:id',putUser);
router.delete('/',deleteUser);
 
module.exports = router;