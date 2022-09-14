const express = require("express")
const router = express.Router()
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        const imgName = file.originalname;
        let newImgName = imgName.slice(0, imgName.lastIndexOf(".")).replace(" ", "-")
        newImgName = newImgName + "_" + new Date().getTime()
        const imgExt = imgName.slice(imgName.lastIndexOf("."))
        const fullName = newImgName + imgExt
        console.log('====================================');
        console.log(fullName);
        console.log(file);
        console.log('====================================');
        cb(null, fullName)
    }
})

var upload = multer({ storage: storage });

const ProductModel = require("../models/product")


router.get('/', (req, res) => {
    // ProductModel.aggregate([{
    //     $lookup: {
    //         from: "productcategory", // collection name in db
    //         localField: "category",
    //         foreignField: "id",
    //         as: "worksnapsTimeEntries"
    //     }
    // }]).exec(function (err, data) {
    //     if (err) {
    //         res.json({ message: "Error", error: err })
    //     } else {
    //         res.json({ message: "Success", data })
    //     }
    //     // students contain WorksnapsTimeEntries
    // })



    ProductModel.find({}, { name: 1, price: 1 }, (err, data) => {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data })
        }
    })
    // res.send('GET request to the homepage')
})


router.post('/', upload.single('image'), function (req, res) {
    console.log(req.file, req.body)
    req.body['image'] = req.file.path
    ProductModel.create(req.body, (err, data) => {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data })
        }
    })
    // res.send(req.body)
})


router.put('/', function (req, res) {
    const { id, name, description } = req.body;
    res.send(`Name ${id} ${name}, desc ${description}`);
});


router.delete('/:id', (req, res) => {
    ProductModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data })
        }
    })
    // res.send('GET request to the homepage' + req.params.id)
})


module.exports = router;