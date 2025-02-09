import {Router} from "express";
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";


const subscriptionRouter = Router();



subscriptionRouter.get('/',(res)=>res.send({title:"get all Subscription "}));
subscriptionRouter.get('/:id',(res)=>res.send({title:"get  Subscription "}));
subscriptionRouter.post('/',authorize,createSubscription);
subscriptionRouter.put('/:id',(res)=>res.send({title:"update  Subscription "}));
subscriptionRouter.delete('/:id',(res)=>res.send({title:"dlt  Subscription "}));
subscriptionRouter.get('/user/:id',authorize,getUserSubscriptions);
subscriptionRouter.put('/:id/cancel',(res)=>res.send({title:"cancel user   Subscription "}));
subscriptionRouter.get('/upcoming-renewals',(res)=>res.send({title:"get upcoming renew   Subscription "}));

export default subscriptionRouter;