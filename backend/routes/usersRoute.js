import  express  from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser,getusersCount } 
from "../controllers/userController.js"
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"

const router=express.Router();

//create new user
router.post("/", createUser);

//update user
router.put("/:id",verifyUser, updateUser);

//delete  user
router.delete("/:id",verifyUser, deleteUser);

//get single user
router.get("/:id",verifyUser, getSingleUser);

//get all users
router.get("/", verifyAdmin,getAllUser);
//router.get("/getAll", getAllUser);

router.get("/search/getusersCount",getusersCount);

export default router;