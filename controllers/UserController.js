
//post user
exports.postUser = async (req,res) => {
    try{
        const newUser = new User({... req.body});
        if(!req.body.email){
            res.status(400).send({message:"Email is required !"});
            return;
        }
        const person=await User.findOne({email:req.body.email});
        if(person){
            res.status(400).send({message:"user already exist"});
            return;
        }
      const response = await newUser.save();
      res.send({response : response, message:"User is saved"});
    }
    catch(error){
res.status(500).send({message:"cannot save it"})
    }
};

//get all

exports.getAll = async (req,res)=>{
    try{
        const result=await Contact.find()
        res.send({response:result, message:"getting Users successfully"});
    }
    catch(error){
        res.status(400).send({message :"canot get Users"})
    }
};

//get by id

exports.getOne = async(req,res) => {
    try{
        const result=await Contact.findOne({_id:req.params.id})
        res.send({response:result, message:"getting User successfully"});
    }
    catch(error){
        res.status(400).send({message :"there is no User with this id"})
    }
}

//delete User

exports.delete = async(req,res) => {
    try {
    const result = await Contact.deleteOne({_id:req.params.id});
    result.n?res.send({response:"user deleted"}):res.send("there is no user with is id");
    }
    catch (error) {
        res.send("there is no User")
    }
}

//update User

exports.update = async(req,res) => {
    try{
const result = await User.updateOne({_id:req.params.id},{$set:{...req.body}});
result.nModified
? res.send({message :"updated"})
: res.send({message:"User already updated"});
    }
    catch(error){
res.status(400).send({message : "there is no user with this id"})
    }
}