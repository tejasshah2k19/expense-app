const userSchema = require("../model/user")

//signup 
exports.signup = function (req, res) {

    var user = new userSchema({
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password,
        role: 1 // 1 for user 
    })
    userSchema.find({ email: req.body.email }, function (err, data) {
        if (data && data.length > 0) {
            res.json({ status: -1, message: "Email Alread Exists!!!", data: "" })
        } else {
            user.save(function (err, data) {
                if (err) {
                    res.json({ status: -1, message: "Something Went Wrong", data: err })
                } else {
                    res.json({ status: 200, message: "Account created!", data: data })

                }
            })
        }

    })
}
//login 


exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    userSchema.find({ email: email, password: password }, function (err, data) {
        if (err) {
            res.json({ status: -1, message: "Something Went Wrong", data: err })
        } else {
            if (data.length == 0) {
                res.json({ status: -1, message: "Invalid Credentials", data: err })
            } else {
                res.json({ status: 200, message: "Login Successfully done", data: data })
            }
        }
    })




}

//forgetpassword 


