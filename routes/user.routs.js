import {Router} from "express";
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();


// api/v1/users/

userRouter.get('/',getUsers);
userRouter.get('/:id',authorize,getUser);
userRouter.post('/',(res)=>res.send({title:"create new  User "}));
userRouter.put('/:id',(res)=>res.send({title:"update  User "}));
userRouter.delete('/:id',(res)=>res.send({title:"delete  User "}));

export default userRouter;