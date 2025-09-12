const express = require("express");
const route = express.Router();
const doctorController= require("../controllers/doctorController");
const uploadMiddleware = require("../middlewares/cloudinaryUpload");


route.post("/doctorsave", uploadMiddleware.upload.single("file"),  doctorController.doctorSave);

route.post("/doctorlogin", doctorController.doctorLogin);
route.get("/doctorinfo", doctorController.doctorInfo);



module.exports= route;