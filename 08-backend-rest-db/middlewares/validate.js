
const {validationResult} = require('express-validator')


const validateFiles=(req,resp,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(400).json(errors);
    }
    next();
}

module.exports ={
    validateFiles
}