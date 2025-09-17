const DoctorModel = require("../models/doctorModel");
const PatientModel= require("../models/patientModel");


const doctorSave=async(req, res)=>{
 try {
     const   {name, speciality, city, address, contact, email, password}= req.body;
    
     const Doctor = await DoctorModel.create({
         doctorname: name,
        speciality: speciality,
         city: city,
         address: address,
         image:  req.file.path,
         contact:contact,
         email: email,
         password: password
     })    


 res.json({
 success: true,
 fileUrl: req.file.path, // Cloudinary file URL
 });
 } catch (err) {
 res.status(500).json({ success: false, message: err.message });
 }
}

const doctorLogin=async(req, res)=>{
    const { email, password} = req.body;
      
    try {
          const Doctor = await DoctorModel.findOne({email:email});
          console.log(Doctor);
          if (!Doctor)
          {
            res.status(401).send({msg:"Email not found!"});
          }

          if (Doctor.password!=password)
          {
            res.status(401).send({msg:"Password does not match!"});
          }

          res.status(200).send(Doctor);

    } catch (error) {
         console.log(error);
    }
}

const doctorInfo=async(req, res)=>{
    
  try {
          const Doctor = await DoctorModel.find();
          res.status(200).send(Doctor);
     } catch (error) {
        console.log(error);
     }
       
}

const doctorSearchByName=async(req, res)=>{
  const {name} = req.body;
  const Doctor = await DoctorModel.find({doctorname:name});
  res.status(200).send(Doctor);
}

const doctorSearchByCity=async(req, res)=>{
    const {city} = req.body;
  const Doctor = await DoctorModel.find({city:city});
  res.status(200).send(Doctor);
}

const doctorSearchBySpeciality=async(req, res)=>{
  const { speciality } = req.body ;
  const Doctor = await DoctorModel.find({speciality:speciality});
  res.status(200).send(Doctor);
}

const getdoctorInfo=async(req, res)=>{
  const {id} = req.query;
  const Doctor = await DoctorModel.findById(id);
  res.send(Doctor);
}


const patientSave=async(req, res)=>{
  const {id, patientname, deseases, address, contact, email } = req.body;
    const Pateint = await PatientModel.create({
          patientname: patientname, 
        deseases: deseases,
         contactno:contact,
         address: address,
         email: email,
         docid: id
    })

res.status(201).send("Patient Detail Save!!");
}

const getPateintDetail=async(req, res)=>{
      const {id} = req.query;
      const patient = await PatientModel.find({docid:id})
      res.send(patient);

}

module.exports={
    doctorSave,
    doctorLogin,
    doctorInfo,
    doctorSearchByName,
    doctorSearchByCity,
    doctorSearchBySpeciality,
    getdoctorInfo,
    patientSave,
    getPateintDetail
}