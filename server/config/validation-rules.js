const { check, validationResult } = require("express-validator/check");
const bodyparser = require("body-parser");

const regValidation = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('Firstname is Required')
        .isLength({ min: 4 })
        .withMessage("Name should be at least 4 characters")
        .matches(/^([A-z]|\s)+$/)
        .withMessage("Name cannot have numbers"),
    check("lastName")
        .not()
        .isEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 4 })
        .withMessage("Name should be at least 4 characters")
        .matches(/^([A-z]|\s)+$/)
        .withMessage("Name cannot have numbers"),
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email should be an email address"),
    check("email_confirm")
        .not()
        .isEmpty()
        .withMessage("Email confirmation is required")
        .isEmail()
        .withMessage("Email should be an email address")
        .custom(function (value, { req }) {
            if (value !== req.body.email) {
                throw new Error("Emails don't match");
            }
            return value;
        }),
    check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .isLength({ min: 5 })
        .withMessage("Password should be at least 5 characters"),
    check(
        "password_confirm",
        "Password confirmation is required or should be the same as password"
    ).custom(function (value, { req }) {
        if (value !== req.body.password) {
            throw new Error("Password don't match");
        }
        return value;
    }),
    check("email").custom(value => {
        return User.findOne({ email: value }).then(function (user) {
            if (user) {
                throw new Error("This email is already in use");
            }
        });
    })
];


const logValidation = [
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required"),
    check("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
];


const postValidation = [

    check("city")
        .not()
        .isEmpty()
        .withMessage("Please write something.")
        .isLength({ min: 3 })
        .withMessage("Must be 3 character long atleast."),
    check("age")
        .not()
        .isEmpty()
        .withMessage("Please enter age.")
        .isInt()
        .withMessage("Must be a number.")
        .matches(/^(1[3-9]|[2-9][0-9]|1[0-1][0-9]|120)+$/)
        .withMessage('Age must be between 13 - 120'),
    check("phonenumber")
        .not()
        .isEmpty()
        .withMessage("Please enter phonenumber.")
        .isInt()
        .withMessage("Must be a number.")
        .isLength({ min: 10, max: 10 })
        .withMessage("Must be 10 digits exactly.")
];

module.exports = {
    regValidation,
    logValidation,
    postValidation
}