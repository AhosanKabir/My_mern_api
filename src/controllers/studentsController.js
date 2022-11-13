const studentModels = require("../models/studentmodel");
const demoModels = require("../models/demomodel");


// * create :
exports.insertStudents = (req, res)=>{
    let reqBody = req.body ;

    studentModels.create(reqBody , (err, data)=>{
        if(err) {
            res.status(404).json({status: "failed" , data : err})
        } else {
            res.status(201).json({status : "Success" , data : data})
        }
    })
};

exports.insertData = (req, res)=>{
    let reqBody = req.body ;

    demoModels.create(reqBody , (err, data)=>{
        if(err) {
            res.status(404).json({status: "failed" , data : err})
        } else {
            res.status(201).json({status : "Success" , data : data})
        }
    })
};




//* Read :
exports.readStudent = (req,res)=>{
    let query = {}
    let projection = "studentName  studentRoll studentClass" ;

    studentModels.find(query , projection , (err , data)=>{
        if(err){
            res.status(404).json({status: "failed" , data: err})
        } else {
            res.status(201).json({status: "sucess" , data: data})
        }
    })
}


//* update:

exports.updateData = (req,res)=>{
    let id = req.params.id;
    let Query = {_id : id};
    let ReqBody = req.body;

    studentModels.updateOne(Query, ReqBody , (err, data)=>{
        if(err){
            res.status(404).json({status: "failed", data: err})
        } else{
            res.status(201).json({status: "success", data: data})
        }
    })
}


//* Delete:

exports.deleteData =(req,res)=>{
    let id = req.params.id;
    let QUERY = {_id: id};
    
    studentModels.remove(QUERY, (err,data)=>{
        if(err){
            res.status(201).json({status: "failed" , data: err})
        } else{
            res.status(201).json({status: "Success" , data: data})
        }
    })
}