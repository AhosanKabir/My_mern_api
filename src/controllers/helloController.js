exports.helloGet = (req,res)=>{
    res.status(200).json({status:"succes", data:"This is get controller"});
};

exports.helloPost = (req,res)=>{
    res.status(201).json({status:"succes", data:"This is post controller"});
};