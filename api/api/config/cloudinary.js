const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary')
const dotenv = require('dotenv').config()


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: 771994949242659,
    api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "rentit",
    allowedFormat: ["jpg", "jpeg", "png"],
    transformation: [{ width: 350, height: 219, crop: "limit" }]
})

const parser = multer({ storage: storage})

module.exports = parser