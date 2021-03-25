// const { mongooseDb } = require('../db/db');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    mobile: Number,
    email: String,
    dob: String,
    gender: String,
    address: String,
    password: String,
    apiKey: String
});
// UserSchema.pre('save', function(next) {
//     if (!this.isNew) return next();
  
//     if (!validatePresenceOf(this.password) && !this.skipValidation()) {
//       next(new Error('Invalid password'));
//     } else {
//       next();
//     }
//   });

// var jwt = require('jsonwebtoken');

// class UserModel {

//     static get tableName() {
//         return 'users';
//     }
//     static get schema() {
//         return new mongoose.Schema({
//             firstname: String,
//             lastname: String,
//             mobile: Number,
//             email: String,
//             dob: String,
//             gender: String,
//             address: String
//         });
//     }


    // static get relationMappings() {
    //     return {
    //         class: {
    //             relation: Model.HasOneRelation,
    //             modelClass: ClassroomModel,
    //             join: {
    //                 from: 'teacher.classroom_id',
    //                 to: 'classroom.id'
    //             }
    //         },
    //         schools: {
    //             relation: Model.ManyToManyRelation,
    //             modelClass: School,
    //             join: {
    //                 from: 'teacher.id',
    //                 through: {
    //                     from: 'teacher_school.teacher_id',
    //                     to: 'teacher_school.school_id'
    //                 },
    //                 to: 'school.id'
    //             }
    //         },
    //         teacherClasses: {
    //             relation: Model.ManyToManyRelation,
    //             modelClass: ClassroomModel,
    //             join: {
    //                 from: 'teacher.id',
    //                 through: {
    //                     from: 'teacher_class.teacher_id',
    //                     to: 'teacher_class.classroom_id'
    //                 },
    //                 to: 'classroom.id'
    //             }
    //         }
    //     }
    // }

// }



// Teacher.generateUniqueApikey = function () {
//     let apikey = jwt.sign({
//         time: Date.now()
//     }, 'teacher');

//     return this.query()
//         .where('apikey', apikey)
//         .then(async (res) => {
//             if (!res.length) return Promise.resolve(apikey);
//             return await Teacher.generateUniqueApikey();
//         });
// }


// UserSchema.methods = {
//     /**
//      * Authenticate - check if the passwords are the same
//      *
//      * @param {String} password
//      * @return {Boolean}
//      * @api public
//      */

//     authenticate: function(password) {
//       return bcrypt.compareSync(password, this.hashed_password);
//     },

//     /**
//      * Encrypt password
//      *
//      * @param {String} password
//      * @return {String}
//      * @api public
//      */

//     encryptPassword: function(password) {
//       if (!password) return '';
//       try {
//         return bcrypt.hashSync(password, 10);
//       } catch (err) {
//         return '';
//       }
//     },

//     /**
//      * Validation is not required if using OAuth
//      */

//     skipValidation: function() {
//       return ~oAuthTypes.indexOf(this.provider);
//     }
//   };
// UserSchema.statics = {
//     /**
//      * Load
//      *
//      * @param {Object} options
//      * @param {Function} cb
//      * @api private
//      */

//     load: function(options, cb) {
//       options.select = options.select || 'name username';
//       return this.findOne(options.criteria)
//         .select(options.select)
//         .exec(cb);
//     }
//   };

module.exports = mongoose.model('users', UserSchema);