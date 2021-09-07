const express=require("express");
const router=express.Router();
const Contact=require("../models/User");
const controllers=require("../controllers/UserController")

// test routing
router.get("/hello",(req,res) => {
    res.send("hello");

});


//post user
router.post("/", controllers.postUser);

//get all
router.get("/", controllers.getAll);
//get by id
router.get("/:id", controllers.getOne);

//delete user

router.delete("/:id",controllers.delete);

//update user
router.put("/:id", controllers.update);

module.exports=router;