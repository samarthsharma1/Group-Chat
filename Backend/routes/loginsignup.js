let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/signuplogin");

router.post("/userregister", Controllers.postsignup);
router.post('/userlogin',Controllers.login)

module.exports=router;
