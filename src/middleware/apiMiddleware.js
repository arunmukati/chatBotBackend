const Joi = require('joi');
const { userModel } = require('../models');
var jwt = require('jsonwebtoken');
const ApiMiddleware = {
    authUser: (req, res, next) => {
        // console.log("request", req.headers)
        let api = req.query.api ? req.query.api : req.headers.authorization;
        // console.log(req.decoded);
        if (!api) {
            return res.status(401).send({message: "Required Auth Token"})
        }
        jwt.verify(api, 'user', function (err, decoded) {
            // console.log(err)
            if (err) {
                res.status(401).send({ message: 'UnAuthorised' });
            }
            else{
                // console.log()
                req.userId = decoded.id;
               next();
            }

        })
        // userModel.findOne({ 'mobile': mobile }).then(user => {
        //     if (!user) {
        //         return next("Invalid User");
        //     }
        //     // console.log("yse",user,api, user.api == api)
        //     // jwt.verify(api, 'user', function(err, decoded) {
        //     //     console.log(err)
        //     //     if(!err){

        //     //     }
        //     //     console.log(decoded);

        //     //   });
        //     if (user.api == api.toString()) {
        //         next();
        //     }
        //     else {
        //         res.send({ status: 401 });
        //     }

        // });
    }
}


module.exports = ApiMiddleware;