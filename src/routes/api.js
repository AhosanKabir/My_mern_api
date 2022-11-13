const express = require("express");
const helloController = require("../controllers/helloController");
const studentsController = require("../controllers/studentsController");
const tokenVerifyMiddleware = require('../middleware/tokenVerify')
const tokenIssueController = require('../controllers/tokenissueController')

//jwt
const jwtaction = require("../controllers/JWTpractice");
const router = express.Router();

// this is my first get, post routing:
router.get("/hello-get", helloController.helloGet);
router.post("/hello-post", helloController.helloPost);

// mongoose route: authentication verify added........
router.get('/tokenIssue' , tokenIssueController.tokenIssue);
router.post("/insertStudent",tokenVerifyMiddleware, studentsController.insertStudents);
router.post("/demodata",tokenVerifyMiddleware, studentsController.insertData);
router.get("/readStudent" ,tokenVerifyMiddleware, studentsController.readStudent);
router.post("/updateStudent/:id" ,tokenVerifyMiddleware, studentsController.updateData);
router.post("/deleteData/:id" ,tokenVerifyMiddleware, studentsController.deleteData);


//jwt practise:
router.post("/createJWT" , jwtaction.createToken);
router.get("/decodetoken" , jwtaction.decodeToken);

module.exports = router;
