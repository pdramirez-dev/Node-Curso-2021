const {Router} = require ('express');
const {check} = require('express-validator')
const router = Router();
const { getUsers, 
        postUser,
        putUser, 
        deleteUser } = require('../controllers/user');
const { validateFiles } = require('../middlewares/validate');
const {isRolValid, existEmail} = require('../helpers/db-validators');
 // Routes API        
router.get('/',getUsers);
router.post('/',[
        check('name','The name is required').not().isEmpty(),
        check('email','The email no is valid').isEmail(),
        check('password','The password is required and  more 6 leters').isLength({min:6}),
        check('email',"The email is not valid email").isEmail(),
        check('email').custom(existEmail),
       // check('role',' Dont role permit').isIn(['ADMIN_ROLE','USER_ROLE']),
       check('role').custom(isRolValid), 
       validateFiles
],postUser);
router.put('/:id',putUser);
router.delete('/',deleteUser);

module.exports = router;