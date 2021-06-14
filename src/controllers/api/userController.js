const Joi = require('joi');
const { userModel } = require('../../models');
var jwt = require('jsonwebtoken');
// const User = mongoose.model('users');
const bcrypt = require('bcrypt');
const saltRounds = 4;
const hashPassword = (plainText) =>{
    return Promise.resolve(bcrypt.hashSync(plainText, saltRounds));
}
const checkIsUniqueEmail = ( value) => {
  return  userModel.findOne({ "email" : value })
        .then(user => {
            console.log("enail",user);
            let isUnique;
            if (Boolean(user)) {
                isUnique = false;
            } else {
                isUnique = true;
            }
            return Promise.resolve(isUnique);
        })
}
const checkIsUniqueMobile = ( value) => {
  return  userModel.findOne({ "mobile" : value })
        .then(user => {
            console.log("user",user);
            let isUnique;
            if (Boolean(user)) {
                isUnique = false;
            } else {
                isUnique = true;
            }
            return Promise.resolve(isUnique);
        })
}
const UserController = {
    registerUser: async (req, res, next) => {
        let body = req.body;

        const object = Joi.object().keys({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            mobile: Joi.number().required(),
            email: Joi.string(),
            // dob: Joi.string().required(),
            // gender: Joi.string().valid('M', 'F').required(),
            // address: Joi.string().required(),
            password: Joi.string().required()
            // classroom_id: Joi.string().required(),
        }).unknown(true);
        const result = object.validate(body);
        if (result.error) {
            return next(result.error);
        }
        const isUniqueEmail = await checkIsUniqueEmail(body.email);
        if (!isUniqueEmail) {
            return next("Email is already Exists");
        }
        const isUniqueMobile = await checkIsUniqueMobile( body.mobile);
        if (!isUniqueMobile) {
            return next("Mobile is already Exists");
        }

        userModel.create({
            firstname: body.firstname,
            lastname: body.lastname,
            mobile: body.mobile,
            email: body.email,
            // dob: body.dob,
            // gender: body.gender,
            // address: body.address,
            password: await hashPassword(body.password)
        }).then(() => {
            delete body['password'];
            res.send({
                message: "User Registered Successfully",
                data: body
            })
        })

    },
    login: (req, res, next) => {
        let body = req.body;
        const object = Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required()
            // classroom_id: Joi.string().required(),
        }).unknown(true);
        const result = object.validate(body);
        if (result.error) {
            return next(result.error);
        }
        userModel.findOne({'email' : body.email}).then(user=>{
            if(!user){
                return next("Invalid User");
            }
            const checkpass= bcrypt.compareSync(body.password, user.password);
            if(!checkpass){
                return next("Invalid Password");
            }
            jwt.sign({
                
                    mobile: user.mobile,
                    id: user._id

                
            }, 'user', function(err, token) {
                console.log(token);
               if(err){
                   console.log(err);
                   res.send("Internal Server Error");
               }
               else{
                user.apiKey = token;
                user.save();
                res.send({
                    message: "Logged In",
                    data:{
                        apiKey: token,
                        userData: {
                            firstname: user.firstname,
                            lastname: user.lastname,
                            mobile: user.mobile,
                            email: user.email
                        }
                    }
                })
               }
              });
           

        })

    },
    profile: (req, res, next)=>{
        console.log("hs",req.userId)
        userModel.findOne({'_id' : req.userId}).then(user=>{
          user['password'] = null;
            res.send({
                data:user,
                userId: user['_id']
            })
        })
    }
}
module.exports = UserController;