const mongoose = require('mongoose')



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The title of your book
 *         email:
 *           type: string
 *           description: The book author
 *         password:
 *           type: string
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         name: Manish Sharma
 *         email: manish@gmail.com
 *         password: 123
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

const UserModelSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
// Compile model from schema
const Users = mongoose.model('Users', UserModelSchema);


module.exports = Users