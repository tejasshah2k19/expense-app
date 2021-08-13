const currencySchema = require("../../model/currencyType")

exports.addCurrency = function (req, res) {
    let currency = new currencySchema({
        currency: req.body.currency
    })

    currency.save(function (err, data) {
        if (err) {
            res.json({ status: -1, message: "something went wrong", data: err })
        } else {
            res.json({ status: 200, message: "currency added successfully....", data: data })
        }
    })
}

exports.getCurrencies = function (req, res) {
    currencySchema.find(function (err, data) {
        if (err) {
            res.json({ status: -1, message: "something went wrong", data: err })
        } else {
            res.json({ status: 200, message: "currencies retrived successfully....", data: data })
        }
    })
}

exports.getCurrencyById = function (req, res) {
    currencySchema.find({ _id: req.params.currencyId }, function (err, data) {
        if (err) {
            res.json({ status: -1, message: "something went wrong", data: err })
        } else {
            if (data.length == 0) {
                res.json({ status: -1, message: "Invalid Currency Id", data: req.params.currencyId })
            } else {
                res.json({ status: 200, message: "currency retrived successfully....", data: data })
            }
        }
    })
}