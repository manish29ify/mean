const express = require('express');
const jwt = require('jsonwebtoken');
const Users = require("../models/user")

const router = express.Router()



router.get('/', (req, res) => {
    // res.send('GET request to the homepage')
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey);

    res.send(token);
})

router.post("/", function (req, res, next) {
    Users.create(req.body, function (err, small) {
        if (err) {
            res.json({ email: err.keyValue.email, message: "Duplicate email " + err.keyValue.email })
        }
        res.json({ message: "User Registered", data: small })
    })
})


router.get("/login", function (req, res, next) {
    Users.find({ email: req.body.email, password: req.body.password }, function (err, small) {
        if (err) {
            res.json({ err })
        }
        res.json({ small })
        // saved!
    })
})

router.post("/login", function (req, res, next) {
    Users.find({ email: req.body.email, password: req.body.password }, function (err, data) {
        if (err) {
            res.status(500)
            res.json({ message: err })
        }
        if (data.length > 0) {
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let tokendata = { time: Date(), userId: data[0] }
            const token = jwt.sign(tokendata, jwtSecretKey);
            res.json({ message: "Login Success", token: token, data: data[0], body: req.body })
        } else {
            res.status(403)
            res.json({ message: "Login Failed", body: req.body })
        }

        // saved!
    })
})


module.exports = router