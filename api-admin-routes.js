var router  = require("express").Router()

var currencyController = require("./app/controller/admin/currencyController")

router.route("/currencies").post(currencyController.addCurrency)
router.route("/currencies").get(currencyController.getCurrencies)
router.route("/currencies/:currencyId").get(currencyController.getCurrencyById)


module.exports = router 